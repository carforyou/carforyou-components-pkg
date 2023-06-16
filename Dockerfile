FROM node:16.20.0-alpine@sha256:8d0dcbf89ad1a5bc561dd0725a6529c98f83065ba6cdd14e69bc5cc7ac565565

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
