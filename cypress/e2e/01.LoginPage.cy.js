/// <reference types="cypress" />

import {USER_EMAIL, USER_PASSWORD} from "../utils/constants";

describe('1 - Crie uma página inicial de login com os seguintes campos e características', () => {
  beforeEach(() => {
    cy.clearDatabase();
    cy.visit('http://localhost:3000/login');
  });

  after(cy.clearDatabase);

  it('A rota para a página deve ser `/login`', () => {
    cy.location('pathname').should('eq', '/login');
  });

  it('Existe um formulário com campo `email`, campo `password` e botão `enviar`', () => {
    cy.get(`input[name=email]`).should('exist');
    cy.get("input[name=password]").should('exist');
    cy.contains(/Entrar/i).should('exist').should("be.disabled");
  });

  it('O botão `enviar` deve estar desabilitado caso o campo `email` não seja preenchido com um formato de email válido', () => {

    cy.get("input[name=email]").clear().type("formato@invalido");
    cy.get("input[name=password]").type("WrongPassword");
    cy.contains(/Entrar/i).should("be.disabled");


    cy.get("input[name=email]").clear().type("formato@valido.com");
    cy.contains(/Entrar/i).should("be.enabled");

  });

  it('Uma mensagem de erro é exibida ao tentar fazer login com um email não cadastrado', () => {
    cy.get("input[name=email]").type("email@naocadastrado.com");
    cy.get("input[name=password]").type("mudar123");
    cy.contains(/Entrar/i).click();
    cy.contains(/Erro ao fazer login/i).should('exist');
  });

  it('Uma mensagem de erro é exibida ao tentar fazer login com a senha errada', () => {
    cy.get("input[name=email]").type(USER_EMAIL);
    cy.get("input[name=password]").type("WrongPassword");
    cy.contains(/Entrar/i).click();
    cy.contains(/Erro ao fazer login/i).should('exist');
  });

  it('A pessoa é redirecionada para a rota `/` quando o login é feito com sucesso ao usar login e senha corretos', () => {
    cy.get("input[name=email]").type(USER_EMAIL);
    cy.get("input[name=password]").type(USER_PASSWORD);
    cy.contains(/Entrar/i).click();
    cy.location('pathname').should('eq', '/');
  });
});
