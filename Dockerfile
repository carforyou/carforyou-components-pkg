FROM node:16.14.2-alpine@sha256:e1c1cdbde9e6ec33399c874fbf40135d0ed493daf7e819e2365909cbd290aee0

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
