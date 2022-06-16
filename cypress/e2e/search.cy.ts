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

    it("Search for elements with no results", () => {
        cy.search('qwerty');
        cy.fixture('searchResults').then((searchResults) => {
            cy.get(searchResults.alert). should('contain', 'No results were found for your search');
        });
    });

    it.only("Search for elements with special code", () => {
        cy.readFile('cypress/support/text/dataSearch.txt').then((text:string) => {
            cy.search(text);
            cy.fixture('searchResults').then((searchResults) => {
                cy.get(searchResults.title). should('contain', text);
            });
        });
    });
  });