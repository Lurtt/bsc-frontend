FROM node:10.15.1-alpine

ENV NODE_ENV production
# RUN npm install --production --silent && mv node_modules ../

WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN apk add yarn
RUN yarn install --production
COPY . .
RUN yarn build
EXPOSE 8081
CMD yarn start