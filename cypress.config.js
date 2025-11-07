// cypress.config.js
const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Registra o task do Lighthouse
      on("task", {
        lighthouse: lighthouse()
      });
      // Prepara o browser para o audit
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      return config;
    },
      // Prepara a auditoria antes de cada teste
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