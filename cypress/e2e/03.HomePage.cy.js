/// <reference types="cypress" />

import { logInWithValidCredentials } from "../utils/helperFunctions";

describe("3 - Crie os elementos da página Home", () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
  });

  after(cy.clearDatabase);

  it("A página deve conter o texto do banner", () => {
    cy.contains(/Chegou a hora de organizar suas finanças pessoais!/i).should(
      "exist"
    );
  });

  it("A página deve conter um link que redireciona para página `/salarios`", () => {
    cy.get("a[href='/salarios']").click();
    cy.location("pathname").should("eq", "/salarios");
  });

  it("A página deve conter um link que redireciona para página `/orcamento`", () => {
    cy.get("a[href='/orcamento']").click();
    cy.location("pathname").should("eq", "/orcamento");
  });
});
