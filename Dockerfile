FROM node:18.16.1@sha256:f4698d49371c8a9fa7dd78b97fb2a532213903066e47966542b3b1d403449da4

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
