
describe('QazandoShop', () => {
  beforeEach(() => {
    cy.visit('https://www.automationpratice.com.br/');
  });
  
  it('Login e adicionar favoritos', () => {
    cy.fazerLogin('thayse.dias@gmail.com', '123456');
    cy.navegarEFavoritar();
  });
});
