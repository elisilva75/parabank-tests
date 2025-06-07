describe('Transferência no Parabank', () => {
  const usuario = {
    username: 'eliana1749335346880',
    password: 'SenhaSegura123'
  };

  beforeEach(() => {
    // Acessar a página inicial
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Login
    cy.get('input[name="username"]').type(usuario.username);
    cy.get('input[name="password"]').type(usuario.password);
    cy.get('input[value="Log In"]').click();

    // Confirma que o login foi bem-sucedido
    cy.contains(`Welcome Eliana Gomes`).should('be.visible');
  });

  it('Deve realizar transferência com sucesso', () => {
    // Clicar em "Transfer Funds"
    cy.contains('a', 'Transfer Funds').click();

    // Confirmar URL da página de transferência
    cy.url().should('include', '/transfer.htm');

    // Digitar o valor a ser transferido
    cy.get('#amount').type('100');

    // Selecionar a primeira conta (origem)
    cy.get('#fromAccountId')
      .find('option')
      .eq(0)
      .then($option => {
        cy.get('#fromAccountId').select($option.val());
      });

    // Selecionar a segunda conta (destino)
    cy.get('#toAccountId')
      .find('option')
      .eq(1)
      .then($option => {
        cy.get('#toAccountId').select($option.val());
      });

    // Clicar no botão "Transfer"
    cy.get(':nth-child(4) > .button').click();

    // Verificar se a transferência foi concluída com sucesso
    cy.contains('Transfer Complete!').should('be.visible');
  });
});
