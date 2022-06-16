/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login with incorrect email", () => {
    cy.login("pepe", "pruebaPasswd");
    cy.fixture("login").then((login) => {
      cy.get(login.errorText).should("contain", "Invalid email address");
    });
  });
});
