FROM node:16.18.0-alpine@sha256:842770ef089fcb7c3bc40fcbf2b1f80fd2361558d4950f03f24444767265e613

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
