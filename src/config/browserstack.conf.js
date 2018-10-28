// config file for running tests on browserstack
const defaultConfig = require('../../nightwatch.conf');

const browserstackConfig = {
  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80,
  },
  test_workers: {
    enabled: false,
    workers: 'auto'
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': process.env.browserstackUser,
        'browserstack.key': process.env.browserstackKey,
        'browserstack.console': 'errors',
        'browserstack.debug': true,
        'browserstack.local': false,
      },
      globals: defaultConfig.test_settings.default,
    },
    ie: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'IE',
        browser_version: '11.0',
        resolution: '1920x1080'
      },
    },
    edge: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'Edge',
        browser_version: '16.0',
        resolution: '1920x1080'
      },
    },
    firefox: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'Firefox',
        browser_version: '59.0',
        resolution: '1920x1080'
      },
    },
    chrome: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'Chrome',
        browser_version: '66.0',
        resolution: '1920x1080'
      },
    },
  },
};

// code to merge the browser stack con with default configuration and test_settings
const nightwatchConfig = Object.assign({}, defaultConfig, browserstackConfig);

Object.keys(nightwatchConfig.test_settings).forEach((key) => {
  const config = nightwatchConfig.test_settings[key];

  config.selenium_host = nightwatchConfig.selenium.host;
  config.selenium_port = nightwatchConfig.selenium.port;
  config.desiredCapabilities = Object.assign(
    {},
    nightwatchConfig.test_settings.default.desiredCapabilities,
    config.desiredCapabilities
  );
});

module.exports = nightwatchConfig;
