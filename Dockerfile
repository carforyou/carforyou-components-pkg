FROM node:16.16.0-alpine@sha256:aadb411a5d398d2141f36a61f469ab91b971e43988d6c74aa5204986e5fe18a1

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
