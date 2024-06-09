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

Then("I enter valid login information and click Sign In button and I am logged in.", () => { // won't load error message for some reason - maybe possible to await element?
  cy
    .get('chr-modal input[id="username"]')
    .should('exist')
    .type('aaa@yopmail.com')
    .wait(1000)
    .should('have.value', 'aaa@yopmail.com')
    .get('chr-modal input[id="password"]')
    .should('exist')
    .type('Qwer1234')
    .wait(1000)
    .should('have.value', 'Qwer1234')
  cy
    .get('chr-modal button[type=submit]')
    .should('exist')
    .click()
  cy
    // .intercept('/auth/api/v1/login').as('login')
    .wait(10000) // nope
    .get('.chr-header__user-zone-item').should('exist').contains('My account')
  // .url().should('include', '/en') // fails long after login success
});
