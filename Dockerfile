FROM node:16.20.0-alpine@sha256:e4148a82dafec19315db93079ea5cb5256b57810fc327f6fd183aacdc1e5aaf3

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
