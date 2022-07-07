const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight: 660,
    viewportWidth: 1000,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    specPattern:"cypress/e2e/allSpecs.spec.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
