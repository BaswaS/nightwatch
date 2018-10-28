require('./src/config/envConfig');

const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');
const windowsEdgeDriver = require('windows-edge');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require-module', 'babel-core/register',
    '--compiler', 'js:babel-core/register',
    '--require', 'src/helper/',
    '--require', 'src/frontend/step_definitions',
    '--format', 'json:reports/cucumber.json',
    'src/frontend/features'],
});

module.exports = {
  output_folder: 'reports/frontEnd',
  custom_commands_path: 'src/helper/custom_commands',
  custom_assertions_path: '',
  stepDefinitions: 'src/frontend/step_definitions',
  page_objects_path: 'src/frontend/page_objects',
  live_output: false,
  disable_colors: false,
  test_workers: {
    enabled: process.env.ParallelRun ? JSON.parse(process.env.ParallelRun) : false,
    workers: 'auto'
  },
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: 'reports/',
    host: '127.0.0.1',
    port: 4444,
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/frontEnd/screenShots',
      },
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehavior: 1,
        chromeOptions: {
          args: ['--headless', 'no-sandbox', '--disable-gpu', '--window-size=1920,1080'],
        },
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
        },
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehavior: 1,
        chromeOptions: {
          args: ['--window-size=1920,1080'],
        },
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
        },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckoDriver.path,
        },
      },
    },
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      selenium: {
        cli_args: {
          'webdriver.edge.driver': windowsEdgeDriver.tasklist,
        },
      },
    },
  },
};
