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

Then("I enter invalid login information and press Enter keyboard button and I am presented by error message", () => {
  cy
    .get('chr-modal input[id="username"]')
    //   .should('exist')
    .type('test@nonsense.com')
  //    .should('have.value', 'keyboardsubmit@nonsense.com') 
  cy
    .get('chr-modal input[id="password"]')
    //   .should('exist')
    .type('password{enter}') //press Enter
  // .should('have.value', 'entertest') // cannot mix assertions when pressing Enter {enter} for some reason
  cy
    .wait(1000)
    .get('.chr-color-red-alert')
    .contains('The email address and password that you entered did not match our records. Please double-check and try again, or contact Client Services for further assistance.')
    .should('be.visible')
});


