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

RUN apk add --update python curl which bash
RUN curl -sSL https://sdk.cloud.google.com | bash
RUN rm -rf /root/.config/gcloud
RUN ln -s /root/google-cloud-sdk/bin/gcloud /tools/

ENV DOCTL_VERSION=1.45.1
RUN apk add --no-cache curl
RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2
RUN curl -L https://github.com/digitalocean/doctl/releases/download/v${DOCTL_VERSION}/doctl-${DOCTL_VERSION}-linux-amd64.tar.gz  | tar xz

RUN apk --no-cache add ca-certificates wget
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
RUN wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk
RUN apk add glibc-2.28-r0.apk

RUN curl -Lso /tmp/libz.tar.xz https://www.archlinux.org/packages/core/x86_64/zlib/download
RUN mkdir -p /tmp/libz
RUN tar -xf /tmp/libz.tar.xz -C /tmp/libz
RUN cp /tmp/libz/usr/lib/libz.so.* /usr/glibc-compat/lib

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN chmod 775 ./aws/install
RUN ./aws/install

WORKDIR /app
ENV NODE_ENV production
ENV KUBECONFIG /root/.kube/config
COPY --from=backend-build /app .
COPY src/ ./
COPY --from=react-build /app/build ./static
CMD [ "node", "." ]
