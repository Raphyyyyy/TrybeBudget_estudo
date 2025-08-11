/// <reference types="cypress" />

import {logInWithValidCredentials} from "../utils/helperFunctions";

describe('9 - Exiba uma mensagem quando não houver gastos cadastrados no orçamento', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
  });

  after(cy.clearDatabase);

  it("Os textos informando que não há gastos cadastrados e o botão `Cadastrar gasto` são exibidos", () => {
    cy.get("a[href='/orcamento']").click();
    cy.contains(/Nenhum gasto adicionado/i).should("exist");
    cy.contains(/Cadastre um gasto no orçamento atual/i).should("exist");
    cy.contains(/Cadastrar gasto/i).should("exist");
  })
});