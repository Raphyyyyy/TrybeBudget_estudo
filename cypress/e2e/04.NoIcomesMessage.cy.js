/// <reference types="cypress" />

import {logInWithValidCredentials} from "../utils/helperFunctions";

describe('4 - Exiba uma mensagem quando não houver salários cadastrados', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
  });

  after(cy.clearDatabase);

  it("Os textos informando que não há salários cadastrados e o botão `Adicionar salário` são exibidos", () => {
    cy.get("a[href='/salarios']").click();
    cy.contains(/Nenhum salário adicionado/i).should("exist");
    cy.contains(/Adicione um salário para fazer o cálculo/i).should("exist");
    cy.contains(/Adicionar salário/i).should("exist");
  })
});