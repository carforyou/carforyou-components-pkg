FROM node:16.16.0-alpine@sha256:0a997e0acb61ec89bb4d78e97aca3cd4ccd7f75c3a3985ffee7e7e09434ab1e7

RUN apk add --update --no-cache alpine-sdk python3

WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci
ADD . /app

RUN npm run build:tailwind
RUN npm run build:assets
RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
