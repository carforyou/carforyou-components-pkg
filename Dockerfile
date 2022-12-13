FROM node:16.18.1-alpine@sha256:b66869a9dc6bfeed416395c2a2f717bd1779af1cef828fe7941af3a8d0837fdc

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
