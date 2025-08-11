/// <reference types="cypress" />

import {logInWithValidCredentials} from "../utils/helperFunctions";

describe('6 - Exiba as informações calculadas sobre salário líquido', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
  });

  after(cy.clearDatabase);

  it("O salário líquido é calculado e exibido corretamente", () => {
    cy.get("a[href='/salarios']").click();
    cy.get("button").contains(/Adicionar salário/i).click();

    cy.get("input[name='grossSalary']").clear().type("10500");
    cy.get("input[name='deductions']").clear().type("150");
    cy.get("input[name='date']").clear().type("2022-12-21");
    cy.get("input[name='dependents']").clear().type("1");

    cy.get("button").contains(/Calcular/i).click();

    cy.contains(/R\$ 7.280,18/i).should("exist");
    cy.contains(/R\$ 10.500,00/i).should("exist");
    cy.contains(/R\$ 1.522,50/i).should("exist");
    cy.contains(/R\$ 1.547,32/i).should("exist");
    cy.contains(/R\$ 150,00/i).should("exist");
    cy.get("button").contains(/Editar/i).should("exist");
    cy.get("button").contains(/Salvar/i).should("exist");
    cy.get("button").contains(/Calcular/i).should("not.exist");
  });

  it("Ao clicar no botão `Editar`, as informações calculadas deixam de ser exibidas e o formulário é exibido novamente", () => {
    cy.get("a[href='/salarios']").click();
    cy.get("button").contains(/Adicionar salário/i).click();

    cy.get("input[name='grossSalary']").clear().type("10500");
    cy.get("input[name='deductions']").clear().type("150");
    cy.get("input[name='date']").clear().type("2022-12-21");
    cy.get("input[name='dependents']").clear().type("1");

    cy.get("button").contains(/Calcular/i).click();

    cy.get("button").contains(/Editar/i).click();

    cy.contains(/R\$ 7.280,18/i).should("not.exist");
    cy.contains(/R\$ 10.500,00/i).should("not.exist");
    cy.contains(/R\$ 1.522,50/i).should("not.exist");
    cy.contains(/R\$ 1.547,32/i).should("not.exist");
    cy.contains(/R\$ 150,00/i).should("not.exist");

    cy.get("input[name='grossSalary']").should("exist").should("have.value", "10500");
    cy.get("input[name='deductions']").should("exist").should("have.value", "150");
    cy.get("input[name='date']").should("exist").should("have.value", "2022-12-21");
    cy.get("input[name='dependents']").should("exist").should("have.value", "1");
    cy.get("button").contains(/Calcular/i).should("exist");
    cy.get("button").contains(/Cancelar/i).should("exist");
  });
});