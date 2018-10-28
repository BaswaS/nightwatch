/*
 *  This command will
 * wait until a specified element is visible and clicks it once it is visible
*/

const global = require('../../helper/constants/constants').default;

exports.command = function clickVisibleElement(
  element,
  timeout = global.waitForConditionTimeout,
  comment = 'looked for %s in the page for %d ms',
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.click(element);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
