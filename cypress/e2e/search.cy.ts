/// <reference types="cypress" />

describe("Search elements", () => {
    beforeEach(() => {
        cy.visit('/');
    });
  
    it("Search for elements with multiple results", () => {
        cy.search('dress');
        cy.fixture('searchResults').then((searchResults) => {
            cy.get(searchResults.title). should('contain', 'dress');
        });
    });

    it("Search elements with no results", () => {
        cy.search('qwerty');
        cy.fixture('searchResults').then((searchResults) => {
            cy.get(searchResults.alert). should('contain', 'No results were found for your search');
        });
    });
  });