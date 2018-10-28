/* eslint-disable no-param-reassign */
const headerValue = require('../constants/constants');

const createHeader = (header, value) => {
  const headers = [];
  if (header && value) {
    headers[header] = value;
  }

  headers[headerValue.CONTENT_TYPE] = 'application/json';
  return headers;
};

const delay = value => new Promise((resolve) => {
  setTimeout(resolve, value);
});


module.exports = {
  createHeader,
  delay,
};
