FROM node:12-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
WORKDIR /app
COPY package*.json ./
RUN npm install --production

FROM node:12-alpine
WORKDIR /app
COPY --from=0 /app .
COPY . ./
CMD [ "node", "." ]
