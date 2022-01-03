FROM node:16.13.1-alpine@sha256:0e071f3c5c84cffa6b1035023e1956cf28d48f4b36e229cef328772da81ec0c5

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
