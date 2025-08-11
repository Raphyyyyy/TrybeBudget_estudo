import {USER_EMAIL, USER_PASSWORD, INCOMES} from "./constants";

export function logInWithValidCredentials() {
  cy.get("input[name=email]").type(USER_EMAIL);
  cy.get("input[name=password]").type(USER_PASSWORD);
  cy.contains(/Entrar/i).click();
}

export function addIncomeAndNavigateTo(navigationPath) {
  cy.visit("http://localhost:3000/salarios");
  cy.get("button").contains(/Adicionar salário/i).click();
  const [income1] = INCOMES;
  cy.get("input[name='grossSalary']").clear().type(income1.grossSalary);
  cy.get("input[name='deductions']").clear().type(income1.deductions);
  cy.get("input[name='date']").clear().type(income1.date);
  cy.get("input[name='dependents']").clear().type(income1.dependents);
  cy.get("button").contains(/Calcular/i).click();
  cy.get("button").contains(/Salvar/i).click();

  cy.visit(`http://localhost:3000/${navigationPath}`);

}