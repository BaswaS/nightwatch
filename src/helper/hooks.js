const {
  Before, After, BeforeAll, AfterAll
} = require('cucumber');
const { client } = require('nightwatch-cucumber');
const productAPI = require('../helper/api/productAPI');
const accountAPI = require('./api/accountAPIV2');
const assessmentAPI = require('./api/assessmentAPI');
const config = require('./utils/config');
const appContext = require('./utils/appContext');
const { getIotClient } = require('./utils/iotListener');
const { expect } = require('chai');
const configVariablesNames = require('../../config');

let launchUrl;


Before({ tags: '@smoke' }, () => {
  setTimeout(() => {
  }, 5000);
  launchUrl = process.env.testURL;
});

Before(() => {
  setTimeout(() => {
  }, 5000);
  return client.init(launchUrl);
});

After(() => {
  setTimeout(() => {
  }, 5000);
  return client.end();
});


AfterAll('AfterFeatures', () => {
  if (client.end) {
    client.end();
  } else console.log('All features tests finished. called client.end but client.end is not defined.');
});

