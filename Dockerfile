FROM node:gallium-alpine@sha256:72e89a86be58c922ed7b1475e5e6f151537676470695dd106521738b060e139d

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
