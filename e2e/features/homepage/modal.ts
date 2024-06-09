import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When("I visit christies.com page", () => {
  cy
    .visit("/")
    .url().should('include', 'christies.com')
});

Then("Christie's Homepage loads succesfully", () => {
  cy
    .get("#site-search")
    .should('exist')
    .should('be.visible')
});

Then("I click on Sign Up button and modal window opens", () => {
  cy
    .get('button')
    .contains('Sign in')
    .should('exist')
    .should('be.visible')
    .click()
  cy
    .get('.chr-modal')
    .should('have.class', 'chr-modal--open') // modal window check (class)
    .should('exist')
    .should('be.visible')
});
