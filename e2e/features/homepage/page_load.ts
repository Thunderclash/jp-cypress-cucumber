import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit christies.com page", () => {
  cy
    .visit("/")
    .url().should('include', 'christies.com')
});

Then("Christie's Homepage loads and search bar is present and visible", () => {
  cy
    .get("#site-search")
    .should('exist')
    .should('be.visible')
});
