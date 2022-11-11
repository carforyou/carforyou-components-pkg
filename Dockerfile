FROM node:16.18.1-alpine@sha256:296dd8ebd5b68706cc35d85e3c5b0103b28d2c0e8fde7e2feff68e4072636d6a

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
