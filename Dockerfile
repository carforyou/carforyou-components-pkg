FROM node:16.14.0-alpine@sha256:9ef5d0d3cdd256557cf829f2bf90d7963de7c128ef1a8ee24b49e69409392dec

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
