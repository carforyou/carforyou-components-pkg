FROM node:16.14.2-alpine@sha256:cdf8c05b081837d7afe63e0ae0711152e60a30f3711b5050f9108def2025d513

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
