FROM node:16.14.2-alpine@sha256:51542061b77f105c2db658035ac6070229f9ea1d3270ab78775df9a825d9a759

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
