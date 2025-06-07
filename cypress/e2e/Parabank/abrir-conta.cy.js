describe('Parabank - Abrir Conta', () => {
  let usuario;

  // Carrega o usuário salvo pelo teste de cadastro
  before(() => {
    cy.readFile('cypress/fixtures/usuario.json').then((dados) => {
      usuario = dados;
    });
  });

  // Realiza login antes de cada teste
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
    // Aguarda o campo de login aparecer
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type(usuario.username);
    cy.get('input[name="password"]').type(usuario.password);
    cy.get('input[value="Log In"]').click();

    // Confirma o login
    cy.contains('Accounts Overview', { timeout: 10000 }).should('be.visible');
  });

  it('Deve abrir uma nova conta com sucesso', () => {
    // Navega para a página de abertura de conta
    cy.contains('Open New Account').click();

    // Garante que a página está correta
    cy.contains('What type of Account would you like to open?').should('be.visible');

    // Seleciona tipo de conta e conta de origem
    cy.get('select#fromAccountId').should('be.visible');
    cy.get('select#type').select('SAVINGS');
    cy.get('select#fromAccountId').select(0); // Primeira conta disponível

    // Clica no botão corrigido
    cy.get('form > div > .button').should('be.visible').click();

    // Valida a abertura da conta
    cy.contains('Account Opened!').should('be.visible');
    cy.get('#newAccountId').should('exist').and('not.be.empty');
  });
});
