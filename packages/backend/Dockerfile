FROM node:12.16.1-stretch-slim
WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm run build:ci

EXPOSE 4000
CMD [ "npm", "start" ]
