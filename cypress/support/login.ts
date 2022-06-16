/// <reference types="cypress" />

Cypress.Commands.add("login", (mail: string, password: string) => {
    cy.fixture("login").then((login) => {
        cy.get(login.loginLink).click();
        cy.get(login.emailInput).type(mail);
        cy.get(login.passwdInput).type(password);
        cy.get(login.loginButton).click();
    });
  });