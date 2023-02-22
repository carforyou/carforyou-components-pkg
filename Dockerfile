FROM node:16.19.1-alpine@sha256:029a85552a270cd6dfae0ec222465f1deacfaf7cee030981b7ff6acd6a0eaf33

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
