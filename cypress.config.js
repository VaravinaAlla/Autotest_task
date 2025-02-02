const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      BASE_URL: 'https://www.saucedemo.com',
      USER_NAME: 'standard_user',
      USER_PASSWORD: 'secret_sauce',
    },
  },
});
