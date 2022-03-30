FROM node:16.14.2-alpine@sha256:32f64135e74ec4dc5d63cc36318444f1d801cd23c44253124f7eccb52c4b89c5

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
