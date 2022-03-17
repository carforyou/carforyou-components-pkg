FROM node:16.14.0-alpine@sha256:2eafdff61134201bb13e452ae5515ac181126d28d91d548b048dab66140adbe6

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
