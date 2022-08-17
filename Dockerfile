FROM node:16.17.0-alpine@sha256:3c7ed283086d6b65c129ca9b1312f56dfbf843aeb4384a491f2040f4b6232652

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
