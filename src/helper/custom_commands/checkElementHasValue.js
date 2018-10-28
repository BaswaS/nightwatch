/*
 *  This command will
 * wait explicitly until a specified element is visible  and checks if it has specified value
 *   Created by Baswa Surukanti on 6/12/2017
*/

const global = require('../../helper/constants/constants');

exports.command = function checkElementHasValue(
  element,
  value,
  timeout = global.waitForConditionTimeout,
  comment = 'looked for %s value in the page for %d ms',
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.expect
    .element(element)
    .to.have.value.which.contains(value)
    .before(global.waitForConditionTimeout);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
