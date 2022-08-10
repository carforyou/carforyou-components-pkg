FROM node:16.16.0-alpine@sha256:1c8769a8c9ed57817ef07162744a3722421333a438185c560aa42a9a1fc6ea23

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
