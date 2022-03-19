FROM node:16.14.2-alpine@sha256:72a490e7ed8aed68e16b8dc8f37b5bcc35c5b5c56ee3256effcdee63e2546f93

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
