FROM node:16.17.1-alpine@sha256:88d9d8da697877a4a771a40e5cbc10a12c2ad959e82f3b0f36ef35635e17f693

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
