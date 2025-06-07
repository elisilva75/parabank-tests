# 🧪 parabank-tests

Automação de testes E2E com Cypress na aplicação de Internet Banking simulada [Parabank](https://parabank.parasoft.com/parabank).

---

## 📌 Objetivo

Este projeto visa automatizar cenários fundamentais de um sistema bancário utilizando Cypress. Os testes cobrem:

- Registro de novo usuário
- Login
- Abertura de nova conta
- Transferência entre contas
- Consulta de extrato bancário

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Git](https://git-scm.com/)

---

## 🧱 Estrutura do projeto

```plaintext
parabank-tests/
├── cypress/
│   ├── e2e/
│   │   └── parabank/
│   │       ├── abrir-conta.cy.js
│   │       ├── extrato.cy.js
│   │       ├── login.cy.js
│   │       └── transferencia.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
└── README.md

🚀 Como rodar o projeto
1. Clonar o repositório
git clone https://github.com/elisilva75/parabank-tests.git
cd parabank-tests

2. Instalar as dependências
npm install

3. Abrir o Cypress (modo interativo)
npx cypress open
Ou, para rodar todos os testes no modo headless (linha de comando):
npx cypress run

✅ Testes disponíveis
Cada arquivo cobre uma funcionalidade:

Arquivo	Cenário
login.cy.js	Login válido e inválido
abrir-conta.cy.js	Abertura de conta corrente ou poupança
transferencia.cy.js	Transferência entre contas bancárias
extrato.cy.js	Consulta de extrato de uma conta

🔒 Dados de teste
⚠️ Por segurança, os testes utilizam dados fixos (como testuser e SenhaSegura123). Certifique-se de que o usuário foi registrado manualmente antes de rodar os testes.

🧩 Sugestões para evolução
Adicionar testes de falha na abertura de conta

Cobrir testes de pagamento de contas e requisições pendentes

Modularizar com comandos customizados (Cypress.Commands)

Adicionar testes para dispositivos móveis (modo responsivo)

Configurar CI com GitHub Actions

🤝 Contribuindo
Faça um fork do projeto

Crie sua branch: git checkout -b feature/minha-feature

Commit suas alterações: git commit -m 'feat: minha nova feature'

Push na branch: git push origin feature/minha-feature

Abra um Pull Request

✅ Sequência Ideal de Execução dos Testes
cadastro.cy.js
Objetivo: Criar um novo usuário com sucesso.

Por que primeiro? Porque os testes seguintes dependem de um usuário válido criado dinamicamente.

login.cy.js
Objetivo: Validar login com usuário criado no teste anterior.

Por que depois? Porque não faz sentido testar login antes de o usuário existir.

abrir-conta.cy.js
Objetivo: Simular a abertura de uma nova conta bancária.

Pré-requisito: Usuário deve estar logado.

transferencia.cy.js
Objetivo: Realizar uma transferência entre contas.

Pré-requisito: Deve existir pelo menos duas contas no nome do usuário.

Dica: Pode incluir a criação de uma conta secundária no início desse teste.

extrato.cy.js
Objetivo: Verificar o histórico de transações e extrato da conta.

Pré-requisito: Deve ter transações realizadas anteriormente para validar a presença no extrato.



📝 Licença
Este projeto está sob a licença MIT.

🙋‍♀️ Sobre a autora
Eliana Gomes – Especialista em Testes de Qualidade de Software, criadora de conteúdo, graduanda em Letras (Língua Portuguesa e Libras), mãe, cristã e apaixonada por ensino e automação de processos.

🔗 GitHub https://github.com/elisilva75 • LinkedIn https://www.linkedin.com/in/liags/



