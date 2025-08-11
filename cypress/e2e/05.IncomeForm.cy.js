/// <reference types="cypress" />

import { logInWithValidCredentials } from "../utils/helperFunctions";

describe("5 - Desenvolva o formulário para adicionar um novo salário", () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.get("a[href='/salarios']").click();
  });

  after(cy.clearDatabase);

  it("O formulário é exibido ao clicar no botão `Adicionar salário`", () => {
    cy.contains(/Adicione um novo salário/i).should("not.exist");

    cy.get("button").contains(/Adicionar salário/i).click();
    cy.contains(/Adicione um novo salário/i).should("exist");
  });

  it("O formulário deixa de ser exibido ao clicar no botão `Cancelar`", () => {
    cy.contains(/Adicione um novo salário/i).should("not.exist");

    cy.get("button").contains(/Adicionar salário/i).click();
    cy.contains(/Adicione um novo salário/i).should("exist");

    cy.get("button").contains(/Cancelar/i).click();
    cy.contains(/Adicione um novo salário/i).should("not.exist");
  });

  it("O formulário possui a estrutura pedida", () => {
    cy.get("button").contains(/Adicionar salário/i).click();

    cy.get("input[name='grossSalary']").should("exist");
    cy.get("input[name='deductions']").should("exist");
    cy.get("input[name='date']").should("exist");
    cy.get("input[name='dependents']").should("exist");

    cy.get("button").contains(/Calcular/i).should("exist");
    cy.get("button").contains(/Cancelar/i).should("exist");
  });

  it("O campo date deve possuir o atributo `type` com o valor `date`", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    cy.get("input[name='date']").should("have.attr", "type", "date");
  });

  it("O botão `Calcular` começa desabilitado quando o formulário é exibido", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    cy.get("button").contains(/Calcular/i).should("be.disabled");
  });

  it("O botão `Calcular` permanece desabilitado quando o campo `grossSalary` não é preenchido corretamente", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    
    cy.get("input[name='deductions']").clear().type("150");
    cy.get("input[name='date']").clear().type("2022-12-21");
    cy.get("input[name='dependents']").clear().type("1");

    cy.get("input[name='grossSalary']").clear().type("0");
    cy.get("button").contains(/Calcular/i).should("be.disabled");

    cy.get("input[name='grossSalary']").clear().type("1500");
    cy.get("button").contains(/Calcular/i).should("be.enabled");
  });

  it("O botão `Calcular` permanece desabilitado quando o campo `dependents` não é preenchido corretamente", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    
    cy.get("input[name='grossSalary']").clear().type("1500");
    cy.get("input[name='deductions']").clear().type("150");
    cy.get("input[name='date']").clear().type("2022-12-21");
    
    cy.get("input[name='dependents']").clear().type("-1");
    cy.get("button").contains(/Calcular/i).should("be.disabled");

    
    cy.get("input[name='dependents']").clear().type("0");
    cy.get("button").contains(/Calcular/i).should("be.enabled");

    cy.get("input[name='dependents']").clear().type("1");
    cy.get("button").contains(/Calcular/i).should("be.enabled");
  });
  
  it("O botão `Calcular` permanece desabilitado quando o campo `date` não é preenchido corretamente", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    
    cy.get("input[name='grossSalary']").clear().type("1500");
    cy.get("input[name='deductions']").clear().type("150");
    cy.get("input[name='dependents']").clear().type("1");
        
    cy.get("button").contains(/Calcular/i).should("be.disabled");

    cy.get("input[name='date']").clear().type("2022-12-21");
    cy.get("button").contains(/Calcular/i).should("be.enabled");
  });

  it("O botão `Calcular` permanece desabilitado quando o campo `deductions` não é preenchido corretamente", () => {
    cy.get("button").contains(/Adicionar salário/i).click();
    
    cy.get("input[name='grossSalary']").clear().type("1500");
    cy.get("input[name='date']").clear().type("2022-12-21");
    cy.get("input[name='dependents']").clear().type("1");
    
    cy.get("input[name='deductions']").clear().type("-1");
    cy.get("button").contains(/Calcular/i).should("be.disabled");

    
    cy.get("input[name='deductions']").clear().type("0");
    cy.get("button").contains(/Calcular/i).should("be.enabled");

    cy.get("input[name='deductions']").clear().type("150");
    cy.get("button").contains(/Calcular/i).should("be.enabled");
  });

  it("O botão `Calcular` é habilitado quando todos os campos são preenchidos corretamente", () => {
    cy.get("button").contains(/Adicionar salário/i).click();

    cy.get("input[name='grossSalary']").clear().type("1500");
    cy.get("input[name='deductions']").clear().type("150");
    cy.get("input[name='date']").clear().type("2022-12-21");
    cy.get("input[name='dependents']").clear().type("1");
    cy.get("button").contains(/Calcular/i).should("be.enabled");
  });
});
