/// <reference types="cypress" />

import {logInWithValidCredentials} from "../utils/helperFunctions";
import {INCOMES} from "../utils/constants";


describe('7 - Salve as informações calculadas e exiba uma lista com todos os salários', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.get("a[href='/salarios']").click();
  });

  after(cy.clearDatabase);

  it("A mensagem `Nenhum salário adicionado` não é exibida quando existe algum salário cadastrado", () => {
    cy.contains(/Nenhum salário adicionado/i).should("exist");
    cy.get("button").contains(/Adicionar salário/i).click();
    
    const [{grossSalary, deductions, date, dependents}] = INCOMES;
    cy.get("input[name='grossSalary']").clear().type(grossSalary);
    cy.get("input[name='deductions']").clear().type(deductions);
    cy.get("input[name='date']").clear().type(date);
    cy.get("input[name='dependents']").clear().type(dependents);

    cy.get("button").contains(/Calcular/i).click();
    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/Nenhum salário adicionado/i).should("not.exist");
  });

  it("Um salário cadastrado é exibido após ser salvo", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    
    const [{grossSalary, deductions, date, dependents}] = INCOMES;
    cy.get("input[name='grossSalary']").clear().type(grossSalary);
    cy.get("input[name='deductions']").clear().type(deductions);
    cy.get("input[name='date']").clear().type(date);
    cy.get("input[name='dependents']").clear().type(dependents);

    cy.get("button").contains(/Calcular/i).click();
    cy.get("button").contains(/Salvar/i).click();

    cy.contains(/R\$ 7.280,18/i).should("exist");
    cy.contains(/R\$ 10.500,00/i).should("exist");
    cy.contains(/21\/12\/2022/i).should("exist");
    cy.get("button").contains(/Excluir/i).should("exist");
  });

  it("Uma lista de salários é exibida quando mais de um salário é cadastrado", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    
    const [income1, income2] = INCOMES;
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


    // income1
    cy.contains(/R\$ 7.280,18/i).should("exist");
    cy.contains(/R\$ 10.500,00/i).should("exist");
    cy.contains(/21\/12\/2022/i).should("exist");

    // income2
    cy.contains(/R\$ 8.239,99/i).should("exist");
    cy.contains(/R\$ 12.000,00/i).should("exist");
    cy.contains(/13\/09\/2023/i).should("exist");

    cy.get('button:contains("Excluir")').should("have.length", 2);
  });
});