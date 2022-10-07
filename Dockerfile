FROM node:16.17.1-alpine@sha256:4d68856f48be7c73cd83ba8af3b6bae98f4679e14d1ff49e164625ae8831533a

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
