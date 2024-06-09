import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit christies.com page", () => {
  cy
    .visit("/")
    .url().should('include', 'christies.com')
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

Then("I enter invalid login information and click Sign In button and I am presented with error message.", () => { // won't load error message for some reason - maybe possible to await element?
  cy
    .get('chr-modal input[id="username"]')
    .should('exist')
    .type('test@nonsense.com')
    .should('have.value', 'test@nonsense.com')
  cy
    .get('chr-modal input[id="password"]')
    .should('exist')
    .type('testpwnonsense')
    .should('have.value', 'testpwnonsense')
  cy
    .get('chr-modal button[type=submit]')
    .should('exist')
    .click()
  cy
    .wait(1000)
    .get('.chr-color-red-alert')
    .contains('The email address and password that you entered did not match our records. Please double-check and try again, or contact Client Services for further assistance.')
    .should('be.visible')
});


