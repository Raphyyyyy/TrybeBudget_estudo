/// <reference types="cypress" />

import {logInWithValidCredentials, addIncomeAndNavigateTo} from "../utils/helperFunctions";
import {EXPENSES} from "../utils/constants";

describe('12 - Remova um gasto ao clicar no botão `Excluir`', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.wait(2000);
    // cy.get("a[href='/orcamento']").click();
    addIncomeAndNavigateTo("orcamento");
  });
  
  after(cy.clearDatabase);

  it("Um gasto é removido da lista quando o botão `Excluir` é clicado", () => {
    const [expense1, expense2, expense3] = EXPENSES;
    
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
    cy.get("input[name='name']").clear().type(expense3.name);
    cy.get("select[name='type']").select(expense3.type);
    cy.get("input[name='amount']").clear().type(expense3.amount);
    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/R\$ 1.500,00/i).should("exist");
    cy.contains(/R\$ 120,00/i).should("exist");
    cy.contains(/R\$ 250,00/i).should("exist");

    cy.get('button:contains("Excluir")').should("have.length", 3);
    

    cy.get('button:contains("Excluir")').eq(1).click();
    cy.contains(/R\$ 1.500,00/i).should("exist");
    cy.contains(/R\$ 120,00/i).should("not.exist");
    cy.contains(/R\$ 250,00/i).should("exist");
    cy.get('button:contains("Excluir")').should("have.length", 2);

    // Aguarda pelo menos 2 segundos para garantir que o json-server
    // tenha tempo de processar a exclusão
    cy.wait(2000);
  });

  it("A mensagem `Nenhum gasto adicionado` é exibida quando todos os gastos cadastrados são removidos", () => {
    const [expense1] = EXPENSES;

    cy.contains(/Nenhum gasto adicionado/i).should("exist");
    
    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("input[name='name']").clear().type(expense1.name);
    cy.get("select[name='type']").select(expense1.type);
    cy.get("input[name='amount']").clear().type(expense1.amount);
    cy.get("button").contains(/Salvar/i).click();


    cy.contains(/R\$ 1.500,00/i).should("exist");
    cy.contains(/Nenhum gasto adicionado/i).should("not.exist");

    cy.get("button").contains(/Excluir/i).click();

    cy.contains(/R\$ 1.500,00/i).should("not.exist");
    cy.contains(/Nenhum gasto adicionado/i).should("exist");
  });
});