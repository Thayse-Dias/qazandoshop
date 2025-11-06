describe('QazandoShop', () => {

  const selectorList = {
    cadastro: 'a[href="/register"]',
    nome: 'input#user',
    email: 'input#email',
    senha: 'input#password',
    botaoCadastrar: '.account_form button',
    botaoConfirmar: '.swal2-confirm',
    
  }

  it('Cadastro', () => {
    cy.visit('https://www.automationpratice.com.br/')
    cy.get(selectorList.cadastro).click()
    cy.get(selectorList.nome).type('thaysedias')
    cy.get(selectorList.email).type('thayse.dias@gmail.com')
    cy.get(selectorList.senha).type('123456')
    cy.get(selectorList.botaoCadastrar).click()
    cy.get(selectorList.botaoConfirmar).click()
    
  })
})