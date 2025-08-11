/// <reference types="cypress" />

import { logInWithValidCredentials } from "../utils/helperFunctions";

describe("10 - Crie um formulário para adicionar um novo gasto", () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit("http://localhost:3000/login ");
    logInWithValidCredentials();
    cy.get("a[href='/orcamento']").click();
  });

  after(cy.clearDatabase);

  it("O formulário é exibido ao clicar no botão `Cadastrar gasto`", () => {
    cy.contains(/Adicionar novo gasto/i).should("not.exist");

    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.contains(/Adicionar novo gasto/i).should("exist");
  });

  it("O formulário deixa de ser exibido ao clicar no botão `Cancelar`", () => {
    cy.contains(/Adicionar novo gasto/i).should("not.exist");

    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.contains(/Adicionar novo gasto/i).should("exist");

    cy.get("button").contains(/Cancelar/i).click();
    cy.contains(/Adicionar novo gasto/i).should("not.exist");
  });

  it("O formulário possui a estrutura pedida", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();

    cy.get("input[name='name']").should("exist");
    cy.get("select[name='type']").should("exist");
    cy.get("option[value='needs']").should("exist");
    cy.get("option[value='wants']").should("exist");
    cy.get("option[value='savings']").should("exist");
    cy.get("input[name='amount']").should("exist");

    cy.get("button").contains(/Salvar/i).should("exist");
    cy.get("button").contains(/Cancelar/i).should("exist");
  });

  it("O botão `Salvar` começa desabilitado quando o formulário é exibido", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();
    cy.get("button").contains(/Salvar/i).should("be.disabled");
  });

  it("O botão `Salvar` permanece desabilitado quando o campo `name` não é preenchido corretamente", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();
    
    cy.get("select[name='type']").select("needs");
    cy.get("input[name='amount']").clear().type("1300");

    cy.get("input[name='name']").clear();
    cy.get("button").contains(/Salvar/i).should("be.disabled");

    cy.get("input[name='name']").clear().type("Aluguel");
    cy.get("button").contains(/Salvar/i).should("be.enabled");
  });

  it("O botão `Salvar` permanece desabilitado quando o campo `amount` não é preenchido corretamente", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();
    
    cy.get("input[name='name']").clear().type("Aluguel");
    cy.get("select[name='type']").select("needs");
    
    cy.get("input[name='amount']").clear().type("0");
    cy.get("button").contains(/Salvar/i).should("be.disabled");

    cy.get("input[name='amount']").clear().type("1");
    cy.get("button").contains(/Salvar/i).should("be.enabled");
  });
  
  it("O botão `Salvar` é habilitado quando todos os campos são preenchidos corretamente", () => {
    cy.get("button").contains(/Cadastrar gasto/i).click();

    cy.get("input[name='name']").clear().type("Aluguel");
    cy.get("select[name='type']").select("needs");
    cy.get("input[name='amount']").clear().type("1");

    cy.get("button").contains(/Salvar/i).should("be.enabled");
  });
});
