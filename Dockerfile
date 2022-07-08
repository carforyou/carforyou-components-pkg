FROM node:16.16.0-alpine@sha256:554142f9a6367f1fbd776a1b2048fab3a2cc7aa477d7fe9c00ce0f110aa45716

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
