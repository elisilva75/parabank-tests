Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[value="Log In"]').click();
  cy.url({ timeout: 10000 }).should('include', '/overview.htm');
});
