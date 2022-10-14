FROM node:16.18.0-alpine@sha256:572b4d22da8a40de09ce3bc35eb9b3ef1c7363ce908b2d84a5cacf0bb9863603

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
