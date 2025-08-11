/// <reference types="cypress" />

import {logInWithValidCredentials, addIncomeAndNavigateTo} from "../utils/helperFunctions";
import {EXPENSES} from "../utils/constants";

describe('11 - Salve o gasto informado e exiba uma lista com todos os gastos cadastrados', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.wait(2000);
    addIncomeAndNavigateTo("orcamento");
  });

  after(cy.clearDatabase);

  it("A mensagem `Nenhum gasto adicionado` não é exibida quando existe algum gasto cadastrado", () => {
    cy.contains(/Nenhum gasto adicionado/i).should("exist");
    cy.get("button").contains(/Cadastrar gasto/i).click();
    
    const [expense1] = EXPENSES;
    cy.get("input[name='name']").clear().type(expense1.name);
    cy.get("select[name='type']").select(expense1.type);
    cy.get("input[name='amount']").clear().type(expense1.amount);

    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/Nenhum gasto adicionado/i).should("not.exist");
  });

  it("Um gasto cadastrado é exibido após ser salvo", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();
    
    const [expense1] = EXPENSES;
    cy.get("input[name='name']").clear().type(expense1.name);
    cy.get("select[name='type']").select(expense1.type);
    cy.get("input[name='amount']").clear().type(expense1.amount);

    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/Aluguel/i).should("exist");
    cy.contains(/R\$ 1.500,00/i).should("exist");
    cy.contains(/Gastos essenciais/i).should("exist");
    cy.get("button").contains(/Excluir/i).should("exist");
  });

  it("Uma lista de gastos é exibida quando mais de um gasto é cadastrado", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();
    
    const [expense1, expense2] = EXPENSES;
    cy.get("input[name='name']").clear().type(expense1.name);
    cy.get("select[name='type']").select(expense1.type);
    cy.get("input[name='amount']").clear().type(expense1.amount);
    cy.get("button").contains(/Salvar/i).click();

    cy.get("button").contains(/Cadastrar gasto/i).click();

    cy.get("input[name='name']").clear().type(expense2.name);
    cy.get("select[name='type']").select(expense2.type);
    cy.get("input[name='amount']").clear().type(expense2.amount);
    cy.get("button").contains(/Salvar/i).click();

    // expense1
    cy.contains(/Aluguel/i).should("exist");
    cy.contains(/R\$ 1.500,00/i).should("exist");
    cy.contains(/Gastos essenciais/i).should("exist");

    // expense2
    cy.contains(/Cinema/i).should("exist");
    cy.contains(/R\$ 120,00/i).should("exist");
    cy.contains(/Lazer e desejos/i).should("exist");

    cy.get('button:contains("Excluir")').should("have.length", 2);
  });
});