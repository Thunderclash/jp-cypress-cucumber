import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit Global Search Result Page.", () => {
  cy
    .visit("https://dw-test3-cd.christies.com/en/search?entry=andy%20warhol&page=1&sortby=relevance&tab=available_lots")
    .url().should('include', 'andy%20warhol')
});

Then("I can observe searched phrase.", () => {
  cy
    .get('h1.chr-search-header__heading')
    .should('contain', 'andy warhol')
    .should('exist')
    .should('be.visible')
});

Then("I can observe presence of filter tray.", () => {
  cy
    .get('.chr-accordion')
    .should('exist')
});

Then("I can observe presence of search result tabs.", () => {
  cy
    .get('.chr-scrolling-carousel__content > #tab-available_lots').each(() => { // parent > child, space between is indirect child
      cy
        .get('chr-search-tab-bar__button__label')
        .invoke('attr', 'class').should('not.be.empty')
    })
});

/*
  cy
    .get('.chr-scrolling-carousel__content')
    .contains('Available', 'Sold')
    .should('exist')
*/



/*  cy
  .url().should('include', 'search?entry=pblo')
cy
  .get('.chr-search-lots-view__no-results')
  .should('exist')
cy
  .contains('No available items for “pblo”').should('be.visible')*/
// });