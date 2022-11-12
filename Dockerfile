FROM node:16.18.1-alpine@sha256:b9e3244a692a1e4fea97938e073a6563ebd88b88cb0c033bf9719c2bc1e79b58

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
