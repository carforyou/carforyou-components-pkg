FROM node:16.20.0-alpine@sha256:bca38851a77922e849907c57588bdf3dfcf95725186d7c26cdfd64da730989d3

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
