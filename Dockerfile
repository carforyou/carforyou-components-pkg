FROM node:16.20.2@sha256:aeb19a58be00038b1d519538ee24ee5c8e4ddc6f42703e70e8b02dff79269da2

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
