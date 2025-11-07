// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners aqui
    },
    supportFile: 'cypress/support/e2e.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
      reportTitle: 'QazandoShop - Testes Automatizados',
      reportPageTitle: 'Relatório de Testes - Thayse Maria Dias Fonseca',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true
    }
  },
  env: {
    apiUrl: 'https://reqres.in/api'
  }
});