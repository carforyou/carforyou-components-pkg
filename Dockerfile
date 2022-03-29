FROM node:16.14.2-alpine@sha256:9caa35be1c0dc66010ad6358830f33f4fd5fda5119fed06b99b03ede38a55452

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
