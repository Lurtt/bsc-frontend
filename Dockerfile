FROM node:10.15.1-alpine

ENV NODE_ENV production
# RUN npm install --production --silent && mv node_modules ../

WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]

RUN apk add yarn
RUN yarn cache clean --force && yarn install --production

COPY . .

RUN yarn build

EXPOSE 3000

CMD yarn start