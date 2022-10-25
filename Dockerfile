FROM node:16.18.0-alpine@sha256:308e8c2ceed9182ac9f937ad166978eaab7d30ea2fe9202b24bf1fdaea34d431

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
