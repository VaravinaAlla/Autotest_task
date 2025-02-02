const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
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
