FROM node:16.18.1-alpine@sha256:2984ca3cd23529fc5a97adf2200e5335e9c0d1b0871381685f69e3da5c1b84ea

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
