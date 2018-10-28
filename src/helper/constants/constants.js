const headerValue = {
  X_API_KEY: 'x-api-key',
  AUTHORIZATION: 'Authorization',
  CONTENT_TYPE: 'Content-Type'
};

const environmentVariable = {
  frontEndBaseURL: (process.env.envname === 'uat') ? 'https://uat-insight.assist.ms/api' : 'https://insight.assist.ms/api',
  baseBackendURL: (process.env.envname === 'uat') ? 'https://uat-api.accordo.io' : 'https://api.accordo.io',
  baseProvisioning: (process.env.envname === 'uat') ? 'https://uat-api.accordo.com' : 'https://api.accordo.com'
};

const loginCredentials = {
  automationTestUser: `jimmy`,
  automationPassword: 'Test1234',
};


const defaultWaitCategory = {
  mediumWait: 12000,
};

module.exports = {
  loginCredentials,
  headerValue,
  defaultWaitCategory,
  environmentVariable,
  waitForConditionTimeout: 60000,
};
