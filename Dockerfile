FROM node:16.20.0-alpine@sha256:296f32946d2fb5227e43fa51e608bbb11a208d648a833e9b264934fb0c7f404b

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
