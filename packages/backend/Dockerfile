FROM node:12.16.1-stretch-slim
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]
