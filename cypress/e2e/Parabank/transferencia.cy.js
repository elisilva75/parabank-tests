describe('Transferência no Parabank', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Realiza o login
    cy.get('input[name="username"]').type('eliana1749335346880');
    cy.get('input[name="password"]').type('SenhaSegura123');
    cy.get('input[value="Log In"]').click();

    // Confirma login
    cy.url().should('include', '/overview.htm');
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('Deve realizar transferência com sucesso', () => {
    // Clica em "Transfer Funds"
    cy.contains('a', 'Transfer Funds').click();

    // Confirma página de transferência
    cy.url().should('include', '/transfer.htm');
    cy.get('#amount').should('be.visible');

    // Preenche valor da transferência
    cy.get('#amount').type('100');

    // Aguarda e seleciona a PRIMEIRA opção do select "From Account"
    cy.get('#fromAccountId')
      .find('option')
      .eq(0)
      .then($opt => {
        const fromVal = $opt.attr('value');
        cy.get('#fromAccountId').select(fromVal);
      });

    // Aguarda e seleciona a SEGUNDA opção do select "To Account"
    cy.get('#toAccountId')
      .find('option')
      .eq(1)
      .then($opt => {
        const toVal = $opt.attr('value');
        cy.get('#toAccountId').select(toVal);
      });

    // Clica no botão para transferir
    cy.get(':nth-child(4) > .button').click();

    // Verifica se a transferência foi concluída
    cy.contains('Transfer Complete!').should('be.visible');
  });
});
