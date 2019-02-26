# bsc-frontend

> Server side rendering app with Apollo Graphql Client.

### IMPORTANT!

#### Make sure that you have middleware/backend for the app up and running

You can clone the repo from [bsc-middleware repository](https://github.com/Lurtt/bsc-middleware)

## Setup

### Clone repo

```bash
$ git clone git@github.com:Lurtt/bsc-frontend.git

$ cd bsc-frontend
$ npm install
```

### Run app

#### Production ready

##### localhost:9000

```bash
$ npm run build
$ npm run start
```

#### Development mode

##### localhost:3000

```bash
$ npm run dev
```

### Tests

#### Common Jest tests

```bash
$ npm run test
```

or watch mode

```bash
$ npm run test:watch
```

#### E2E cypress tests

Make sure that the app is running in dev mode (`npm run dev`) before you run cypress tests

After that run cypress in second terminal

```bash
$ npm run cypress
```
