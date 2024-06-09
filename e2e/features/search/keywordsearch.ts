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

Then("Enter keyword in Search Bar", () => {
  cy
  .get("#site-search")
  .click()
  .type('pablo picasso{enter}')
});

Then("Search Results page opens with searched phrase", () => {
  cy
  .url().should('include', 'search?entry=pablo%20picasso')
});
