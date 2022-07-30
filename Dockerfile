FROM node:16.16.0-alpine@sha256:1908564153449b1c46b329e6ce2307e226bc566294f822f11c5a8bcef4eeaad7

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
