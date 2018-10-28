/*
 *  This command will
 * wait explicitly until a specified element is present
 *   Created by Baswa Surukanti on 7/12/2017
*/

const global = require('../../helper/constants/constants');

exports.command = function checkElementPresent(
  element,
  timeout = global.waitForConditionTimeout,
  comment = 'looked for %s to present in the page for %d ms',
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.expect.element(element).to.be.present.before(global.waitForConditionTimeout);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
