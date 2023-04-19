FROM node:16.19.1-alpine@sha256:90f5adf9a338b2d88b2d35488e6e5ce9b1fb6be211b57c8c09218791ac4097d4

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
