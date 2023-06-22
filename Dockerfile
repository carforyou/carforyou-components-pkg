FROM node:16.20.1-alpine@sha256:82b203db6fb3500464df249b28eb497f9fb28ca41c1800d792ad4ab75445a29e

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
