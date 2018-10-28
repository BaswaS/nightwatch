const rp = require('request-promise-native');
const aws4 = require('aws4');
const { getAwsCredentials } = require('../utils/getAwsCredentials');


const httpAWSRequests = {

  callRequest: (requestMethod, parsedUrl, uri, requestBody) => {
    const httpOptions = aws4.sign({
      region: 'us-west-2',
      host: parsedUrl.host,
      path: `${parsedUrl.pathname}${uri}`,
      service: 'execute-api',
      method: requestMethod,
      json: true,
      resolveWithFullResponse: true,
      uri: `${parsedUrl.href}${uri}`
    }, getAwsCredentials());

    if (requestBody !== '') {
      httpOptions.body = requestBody;
    }

    return rp(httpOptions);
  }
};

const requestAWStService = {
  get: (parsedUrl, uri) => httpAWSRequests.callRequest('GET', parsedUrl, uri, ''),
  post: (parsedUrl, uri, requestBody) => httpAWSRequests.callRequest('POST', parsedUrl, uri, requestBody),
  delete: (parsedUrl, uri) => httpAWSRequests.callRequest('DELETE', parsedUrl, uri, ''),
  put: (parsedUrl, uri, requestBody) => httpAWSRequests.callRequest('PUT', parsedUrl, uri, requestBody)
};

exports.requestAWStService = requestAWStService;
