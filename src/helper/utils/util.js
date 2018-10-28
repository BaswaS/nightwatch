/**
 * Created by Ali.Al-Sarraf on 17/07/2017.
 */
const { headerValue } = require('../constants/constants');
const childProcess = require('child_process');

const createHeader = (header, value) => {
  const headers = [];
  if (header && value) {
    headers[header] = value;
  }

  headers[headerValue.CONTENT_TYPE] = 'application/json';
  return headers;
};

const runCmd = (cmd) => {
  const resp = childProcess.execSync(cmd);
  const result = resp.toString('UTF8');
  return result;
};

const findElementInElements = (elements, toFindElement, getText, clickElement) => {
  for (let i = 0; i < elements.length; i += 1) {
    getText(elements[i].ELEMENT, (textResult) => {
      if (textResult.value === toFindElement) {
        clickElement(elements[i].ELEMENT);
      }
    });
  }
};

module.exports = {
  createHeader,
  runCmd,
  findElementInElements
};

