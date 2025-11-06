describe('QazandoShop', () => {

  const selectorList = {
    botaoinciar: '#top_header' [href='/login'],
    nome: 'input#user',
    email: 'input#email',
    senha: 'input#password',
    botaoLogin: '.login_submit',
    botaoConfirmar: '.swal2-confirm',
  }


   it('Login', () => {
    cy.visit('https://www.automationpratice.com.br/')
    cy.get(selectorList.botaoinciar).click()
    cy.get(selectorList.nome).type('thaysedias')
    cy.get(selectorList.email).type('thayse.dias@gmail.com')
    cy.get(selectorList.senha).type('123456')
    cy.get(selectorList.botaoLogin).click()
    cy.get(selectorList.botaoConfirmar).click()

})
})