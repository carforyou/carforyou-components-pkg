FROM node:16.19.0-alpine@sha256:1621ddffc775ccf10dc8710660e70d5bfb8e4ee349b926f133698e6512144b73

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
