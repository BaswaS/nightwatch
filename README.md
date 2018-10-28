### Get Started

Nightwatch is based on the NightWatch-CucumberJS plugin full details about the framework can be found on their [website](https://github.com/mucsi96/nightwatch-cucumber)

### To Start

When you download the solution from BitBucket it will already have the `node_modules` downloaded with it.
But if you want to start from scratch, delete the downloaded `node_modules` and run the following command in the terminal of your favourite IDE or command line

Installing fresh node_modules:
```bash
npm install
```

To run test suite:

```bash
npm run test
```

To run the test suite against chrome:
```bash
npm run test:chrome
```

Lint the code, this script will find any code syntax error. Good to run this before running any tests:
```bash
npm run lint
```

Fix code syntax errors:
```bash
npm run lint:fix
```

### To Run it locally
You can run test locally with same environment virables setting-ups of UAT or production server for trouble shooting and debugging. By default, commands start with `npm run test` will run test on UAT, commands start with `npm run test-prod` will run test on production server.

##### Steps
1. Edit `src/config/.env.*` files, put proper userIds and keys to related environment variables.
1. Make sure no new packages need to be installed, if it is not, run `npm install`.
1. Run related npm script for test.

##### Examples
* For a smoke test on uat server: `npm run test:smoke`.
* To run a quickSmoke test on production server: `npm run test-prod:quickSmoke`

##### Notice
* For security purpose, all password related viriables haven't been hard coded in `.env.*`, you will need to change it manually.