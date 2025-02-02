const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true,
      charts: true,
    },
    env: {
      BASE_URL: 'https://www.saucedemo.com',
      USER_NAME: 'standard_user',
      USER_PASSWORD: 'secret_sauce',
    },
  },
});
