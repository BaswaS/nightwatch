const { setDefaultTimeout, setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.scenarioContext = {
    };
  }
}

setWorldConstructor(CustomWorld);

setDefaultTimeout(60 * 3000);
