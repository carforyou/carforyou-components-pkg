FROM node:16.19.1-alpine@sha256:2ca257ee86a65e8d7fe6bb0ed3df2e7336b7c5a1662512627c99428beed8bdae

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
