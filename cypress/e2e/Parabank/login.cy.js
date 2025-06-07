// cypress/e2e/Parabank/login.cy.js

describe('Login Parabank', () => {
  beforeEach(() => {
    cy.fixture('usuario.json').as('usuario');
  });

  it('Deve fazer login com sucesso', function () {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    cy.get('input[name="username"]').type(this.usuario.username);
    cy.get('input[name="password"]').type(this.usuario.password);
    cy.get('input[value="Log In"]').click();

    cy.contains('Accounts Overview', { timeout: 10000 }).should('be.visible');
    cy.url().should('include', '/overview.htm');
  });

  it('Deve exibir erro com credenciais inválidas', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    cy.get('input[name="username"]').type('usuario_invalido');
    cy.get('input[name="password"]').type('senha_errada');
    cy.get('input[value="Log In"]').click();

    cy.contains('The username and password could not be verified.').should('be.visible');
  });
});
