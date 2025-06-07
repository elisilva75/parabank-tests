// cypress/e2e/Parabank/cadastro.cy.js

describe('Cadastro no Parabank', () => {
  it('Deve criar um novo usuário com sucesso', () => {
    const timestamp = Date.now();
    const username = `eliana${timestamp}`;
    const password = 'SenhaSegura123';

    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    cy.get('#customer\\.firstName').type('Eliana');
    cy.get('#customer\\.lastName').type('Gomes');
    cy.get('#customer\\.address\\.street').type('Rua Teste 123');
    cy.get('#customer\\.address\\.city').type('São Paulo');
    cy.get('#customer\\.address\\.state').type('SP');
    cy.get('#customer\\.address\\.zipCode').type('12345');
    cy.get('#customer\\.phoneNumber').type('11999999999');
    cy.get('#customer\\.ssn').type('123-45-6789');
    cy.get('#customer\\.username').type(username);
    cy.get('#customer\\.password').type(password);
    cy.get('#repeatedPassword').type(password);
    
    // Submissão do formulário
    cy.get('input[type="submit"][value="Register"]').click();

    cy.contains(`Welcome ${username}`).should('be.visible');

    // Salvar o usuário em um fixture
    cy.writeFile('cypress/fixtures/usuario.json', {
      username,
      password,
    });
  });
});
