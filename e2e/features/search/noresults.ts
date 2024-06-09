import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit christies.com page", () => {
  cy
  .visit("/")
  .url().should('include', 'christies.com')
  cy
  .get("#site-search")
  .should('exist')
  .should('be.visible')
});

Then("Enter nonsensical keyword in Search Bar", () => {
  cy
  .get("#site-search")
  .click()
  .type('pblo{enter}')
});

Then("Search Results page does not return any results", () => {
  cy
  .url().should('include', 'search?entry=pblo')
  cy
  .get('.chr-search-lots-view__no-results')
  .should('exist')
  cy
  .contains('No available items for “pblo”').should('be.visible')
});