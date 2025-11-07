// cypress/e2e/login.cy.js
describe('QazandoShop', () => {

  const selectorList = {
    botaoinciar: '#top_header a[href="/login"]',
    // NOVOS CAMPOS (só email e senha)
    email: 'input#user',
    senha: 'input#password',
    botaoLogin: '.login_submit',
    botaoConfirmar: '.swal2-confirm',
  };

  it('Login com sucesso', () => {
    cy.visit('https://www.automationpratice.com.br/');
    
    cy.get(selectorList.botaoinciar).click();
    
    // PREENCHE SÓ EMAIL E SENHA
    cy.get(selectorList.email).type('thayse.dias@gmail.com');
    cy.get(selectorList.senha).type('123456');
    
    cy.get(selectorList.botaoLogin).click();
    
    // Confirma o popup
    cy.get(selectorList.botaoConfirmar).click();

    // Validação final: usuário logado
    cy.contains('thayse.dias@gmail.com').should('be.visible');
    // ou: cy.url().should('include', '/dashboard');
  });

});