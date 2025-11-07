describe('API Authentication', () => {

  it('1 - Login com sucesso (200)', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      body: {
        username: 'emilys',
        password: 'emilyspass'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('accessToken');
      cy.log('Token recebido: ' + response.body.accessToken);
    });
  });

  it('2 - Login com senha errada (400)', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      body: {
        username: 'emilys',
        password: 'senhaerrada'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Invalid credentials');
    });
  });

  it('3 - Listar usuários (200)', () => {
    cy.request('GET', 'https://dummyjson.com/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.users).to.have.length.greaterThan(0);
    });
  });

  it('4 - Acessar perfil com token (200)', () => {
    let token;

    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      body: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      }
    }).then((response) => {
      token = response.body.accessToken;
      expect(response.status).to.eq(200);

      cy.request({
        method: 'GET',
        url: 'https://dummyjson.com/auth/me',
        headers: {
          Authorization: `Bearer ${token}`
        },
        failOnStatusCode: false
      }).then((profileResponse) => {
        expect(profileResponse.status).to.eq(200);
        expect(profileResponse.body.username).to.eq('emilys');
        cy.log('Perfil acessado com sucesso!');
      });
    });
  });

});