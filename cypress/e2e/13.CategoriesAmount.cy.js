/// <reference types="cypress" />

import {logInWithValidCredentials, addIncomeAndNavigateTo} from "../utils/helperFunctions";
import {EXPENSES} from "../utils/constants";

describe('13 - Calcule qual a porcentagem do salário cada tipo de gasto representa', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.wait(2000);
    // cy.get("a[href='/orcamento']").click();
    addIncomeAndNavigateTo("orcamento");
  });

  after(cy.clearDatabase);
  
  it("A somatória e porcentagem por categoria são exibidas corretamente", () => {
    const [expense1, expense2, expense3] = EXPENSES;
    
    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense1.name);
    cy.get("select[name='type']").select(expense1.type);
    cy.get("input[name='amount']").clear().type(expense1.amount);
    cy.get("button").contains(/Salvar/i).click();

    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense1.name);
    cy.get("select[name='type']").select(expense1.type);
    cy.get("input[name='amount']").clear().type(expense1.amount);
    cy.get("button").contains(/Salvar/i).click();


    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense2.name);
    cy.get("select[name='type']").select(expense2.type);
    cy.get("input[name='amount']").clear().type(expense2.amount);
    cy.get("button").contains(/Salvar/i).click();

    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense2.name);
    cy.get("select[name='type']").select(expense2.type);
    cy.get("input[name='amount']").clear().type(expense2.amount);
    cy.get("button").contains(/Salvar/i).click();


    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense3.name);
    cy.get("select[name='type']").select(expense3.type);
    cy.get("input[name='amount']").clear().type(expense3.amount);
    cy.get("button").contains(/Salvar/i).click();

    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense3.name);
    cy.get("select[name='type']").select(expense3.type);
    cy.get("input[name='amount']").clear().type(expense3.amount);
    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/R\$ 3.000,00/i).should("exist");
    cy.contains(/R\$ 240,00/i).should("exist");
    cy.contains(/R\$ 500,00/i).should("exist");

    cy.contains(/(42%)/i).should("exist");
    cy.contains(/(4%)/i).should("exist");
    cy.contains(/(7%)/i).should("exist");
  });
});