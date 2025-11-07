// cypress/e2e/lighthouse.cy.js
// cypress/e2e/lighthouse.cy.js
describe('Teste de Performance com Lighthouse', () => {
  it('Relatório de Performance com Lighthouse', () => {
  cy.visit('https://www.automationpratice.com.br/');
  cy.get('body').should('be.visible');

  cy.lighthouse({
    performance: 0,
    accessibility: 0,
    'best-practices': 0,
    seo: 0,
  }).then((scores) => {
    cy.log(`Performance: ${scores.performance}`);
    cy.log(`Accessibility: ${scores.accessibility}`);
    cy.log(`SEO: ${scores.seo}`);
  });
});
});