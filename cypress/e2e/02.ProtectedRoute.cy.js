/// <reference types="cypress" />

import {logInWithValidCredentials} from "../utils/helperFunctions";

describe("2 - Faça o controle de navegação das rotas", () => {
  beforeEach(() => {
    cy.clearDatabase();
  });

  after(cy.clearDatabase);

  it("Caso a pessoa não esteja logada ao acessar a rota `/`, ela deve ser redirecionada para `/login`", () => {
    cy.visit("http://localhost:3000/");
    cy.location("pathname").should("eq", "/login");
  });

  it("Caso a pessoa já esteja logada ao acessar a rota `/login`, ela deve ser redirecionada para a rota `/`", () => {
    cy.visit("http://localhost:3000/login");
    logInWithValidCredentials();
    cy.location("pathname").should("eq", "/");
    
    cy.visit("http://localhost:3000/login ");
    cy.location("pathname").should("eq", "/");
  });
});