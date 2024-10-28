const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'test/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    baseUrl: "http://localhost:3000", // replace with your app's URL
  },
});
