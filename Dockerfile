FROM node:16.20.0-alpine@sha256:b4a72f83f52bbe3970bb74a15e44ec4cf6e873ad4787473dfc8a26f5b4e29dd2

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
