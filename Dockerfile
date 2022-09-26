FROM node:16.17.1-alpine@sha256:061d1a13f7107cef701517b906aaeb24e094ff701002e82ff17cabdcfe2e6450

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
