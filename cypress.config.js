const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern :'cypress/Integration/Test/*.js',
    // specPattern :'cypress/Integration/Test/Test1.js',
  },
});
