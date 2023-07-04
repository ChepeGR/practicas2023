const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "compilerOptions": {
      "types": ["cypress", "node", "cypress-real-events"],
    testIsolation : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
  },
});
