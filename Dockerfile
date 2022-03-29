FROM node:16.14.2-alpine@sha256:687867b9ea2903e81dd4b594c704c7a19c29b46938aa2b9a478ddb5e65e2abdf

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
