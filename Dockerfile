FROM node:16.20.0-alpine@sha256:8d18e32fa398763c07407e9d407c64e6a3c2a18e9fa97362cfde669a6b6161ef

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
