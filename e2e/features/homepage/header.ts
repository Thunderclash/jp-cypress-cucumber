import { Then, Given, } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit christies.com page", () => {
  cy
    .visit("/")
    .url().should('include', 'christies.com')
});

Then("I should see a Christie's Homepage and Sign In button.", () => {
  cy
    .get('button')
    .contains('Sign in')
    .should('exist')
    .should('be.visible')
});

Then("I should see a Christie's Homepage and How To Sell button.", () => {
  cy
    .get('a[href="https://staging.christies.com/auctions/how-to-sell-at-christies.aspx?sc_lang=en&lid=1"]')
    .contains('How to sell')
    .should('exist')
    .should('be.visible')
});


Then("I should see all important links in Page Header.", () => {
  cy
    .get('[class^=chr-main-nav__list-item]')
    // .first()
    .contains('Auctions Pedro')
    .should('exist')
    .should('be.visible')
  cy
    .get('[class^=chr-main-nav__list-item]')
    .contains('Private Sales')
    .should('exist')
    .should('be.visible')
  cy
    .get('[class^=chr-main-nav__list-item]')
    .contains('Locations')
    .should('exist')
    .should('be.visible')
  cy
    .get('[class^=chr-main-nav__list-item]')
    .contains('Departments')
    .should('exist')
    .should('be.visible')
  cy
    .get('[class^=chr-main-nav__list-item]')
    .contains('Stories')
    .should('exist')
    .should('be.visible')
  cy
    .get('[class^=chr-main-nav__list-item]')
    .contains('Services')
    .should('exist')
    .should('be.visible')
});