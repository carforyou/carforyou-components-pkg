FROM node:16.20.0-alpine@sha256:f1657204d3463bce763cefa5b25e48c28af6fe0cdb0f68b354f0f8225ef61be7

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
