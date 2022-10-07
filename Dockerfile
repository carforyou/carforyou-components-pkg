FROM node:16.17.1-alpine@sha256:7584b116f368d94fab2ecc21ebbcfd5434a3427c2f96f846972821b5ad0266fc

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
