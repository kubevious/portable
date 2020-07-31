###############################################################################
# Step 1 : React Builder Image
FROM kubevious/react-builder:12 as react-build
WORKDIR /app
ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH
COPY client/package.json ./
COPY client/package-lock.json ./
RUN npm ci --only=production
COPY client/ ./
RUN npm run build

###############################################################################
# Step 2 : Backend Builder Image
FROM kubevious/node-builder:12 as backend-build
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
WORKDIR /app
ENV NODE_ENV production
COPY src/package.json ./
COPY src/package-lock.json ./
RUN npm ci --only=production

###############################################################################
# Step 3 : Runner Image
FROM node:12-alpine

ENV PATH="/tools:${PATH}"
WORKDIR /tools

# Installing DOCTL
ARG INSTALL_DO
COPY docker-scripts/install-doctl.sh /tmp/install.sh
RUN chmod u+x /tmp/install.sh
RUN if [ "${INSTALL_DO}" = "true" ]; \
        then /tmp/install.sh; \
    fi
RUN rm /tmp/install.sh

# Installing AWS
ARG INSTALL_AWS
COPY docker-scripts/install-aws.sh /tmp/install.sh
RUN chmod u+x /tmp/install.sh
RUN if [ "${INSTALL_AWS}" = "true" ]; \
        then /tmp/install.sh; \
    fi
RUN rm /tmp/install.sh

# Installing GCLOUD
ARG INSTALL_GCLOUD
COPY docker-scripts/install-gcloud.sh /tmp/install.sh
RUN chmod u+x /tmp/install.sh
RUN if [ "${INSTALL_GCLOUD}" = "true" ]; \
        then /tmp/install.sh; \
    fi
RUN rm /tmp/install.sh

WORKDIR /app
ENV NODE_ENV production
ENV KUBECONFIG /root/.kube/config
COPY --from=backend-build /app .
COPY src/ ./
COPY --from=react-build /app/build ./static
CMD [ "node", "." ]
