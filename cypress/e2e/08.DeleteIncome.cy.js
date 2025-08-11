/// <reference types="cypress" />

import {INCOMES} from "../utils/constants";
import {logInWithValidCredentials} from "../utils/helperFunctions";

describe('8 - Remova um salário ao clicar no botão `Excluir salário`', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.get("a[href='/salarios']").click();
  });
  
  after(cy.clearDatabase);

  it("Um salário é removido da lista quando o botão `Excluir salário` é clicado", () => {
    const [income1, income2, income3] = INCOMES;
    
    cy.get("button").contains(/Adicionar salário/i).click();
    cy.get("input[name='grossSalary']").clear().type(income1.grossSalary);
    cy.get("input[name='deductions']").clear().type(income1.deductions);
    cy.get("input[name='date']").clear().type(income1.date);
    cy.get("input[name='dependents']").clear().type(income1.dependents);
    cy.get("button").contains(/Calcular/i).click();
    cy.get("button").contains(/Salvar/i).click();

    
    cy.get("button").contains(/Adicionar salário/i).click();
    cy.get("input[name='grossSalary']").clear().type(income2.grossSalary);
    cy.get("input[name='deductions']").clear().type(income2.deductions);
    cy.get("input[name='date']").clear().type(income2.date);
    cy.get("input[name='dependents']").clear().type(income2.dependents);
    cy.get("button").contains(/Calcular/i).click();
    cy.get("button").contains(/Salvar/i).click();


    cy.get("button").contains(/Adicionar salário/i).click();
    cy.get("input[name='grossSalary']").clear().type(income3.grossSalary);
    cy.get("input[name='deductions']").clear().type(income3.deductions);
    cy.get("input[name='date']").clear().type(income3.date);
    cy.get("input[name='dependents']").clear().type(income3.dependents);
    cy.get("button").contains(/Calcular/i).click();
    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/R\$ 10.500,00/i).should("exist");
    cy.contains(/R\$ 12.000,00/i).should("exist");
    cy.contains(/R\$ 15.000,00/i).should("exist");

    cy.get('button:contains("Excluir")').should("have.length", 3);
    

    cy.get('button:contains("Excluir")').eq(1).click();
    cy.contains(/R\$ 10.500,00/i).should("exist");
    cy.contains(/R\$ 12.000,00/i).should("not.exist");
    cy.contains(/R\$ 15.000,00/i).should("exist");
    cy.get('button:contains("Excluir")').should("have.length", 2);

    // Aguarda pelo menos 2 segundos para garantir que o json-server
    // tenha tempo de processar a exclusão
    cy.wait(2000);
  });

  it("A mensagem `Nenhum salário adicionado` é exibida quando todos os salários cadastrados são removidos", () => {
    const [{grossSalary, deductions, date, dependents}] = INCOMES;
    cy.contains(/Nenhum salário adicionado/i).should("exist");
    
    cy.get("button").contains(/Adicionar salário/i).click();
    cy.get("input[name='grossSalary']").clear().type(grossSalary);
    cy.get("input[name='deductions']").clear().type(deductions);
    cy.get("input[name='date']").clear().type(date);
    cy.get("input[name='dependents']").clear().type(dependents);
    cy.get("button").contains(/Calcular/i).click();
    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/R\$ 10.500,00/i).should("exist");
    cy.contains(/Nenhum salário adicionado/i).should("not.exist");

    cy.get("button").contains(/Excluir/i).click();

    cy.contains(/R\$ 10.500,00/i).should("not.exist");
    cy.contains(/Nenhum salário adicionado/i).should("exist");
  });
});