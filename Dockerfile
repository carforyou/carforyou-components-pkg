FROM node:16.16.0-alpine@sha256:e2423ec956aaee105fd85084c9e5cbbfbc49339a79aaa95b6568e16b3ed6efb3

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
