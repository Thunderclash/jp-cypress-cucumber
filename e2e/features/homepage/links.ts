import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit christies.com page", () => {
  cy
    .visit("/")
    .url().should('include', 'christies.com')
});

Then("I can visit all navigation links in main menu navigation.", () => { // header links check
  cy
    .get('.chr-header-footer ul.chr-main-nav__list > li.chr-main-nav__list-item').each((li) => { // parent > child, space between is indirect child
      cy
        .wrap(li).within(() => {
          cy
            .get('a.chr-main-nav__link.chr-action')
            .should('have.attr', 'href')
            .wait(200)
        })
    })
});

Then("I can visit all navigation links in footer navigation section.", () => { // footer links check
  cy
    .get('ul.chr-footer__nav-list > li.chr-footer__nav-list-item').each((li) => { // parent > child, space between is indirect child
      cy
        .wrap(li).within(() => {
          cy
            .get('a.chr-body.chr-link')
            .should('have.attr', 'href')
        })
    })
});


/*
Then("I can visit all navigation links in footer navigation in About us section.", () => { // footer links check // nevim jak projít dál na další sloupec.. 3 objekty?
  cy
    .get('ul.chr-footer__nav-list > li.chr-footer__nav-list-item').each((li) => { // parent > child
      cy
        .wrap(li).within(() => {
          cy
            .get('a.chr-body.chr-link')
            .should('have.attr', 'href')
        })
    })
});
*/


/* cy
  .get('.chr-header-footer ul.chr-main-nav__list > li.chr-main-nav__list-item').each((li) => {
    cy
      .wrap(li).within(() => {
        cy
          .get('a.chr-main-nav__link.chr-action')
          .invoke('attr', 'target', '_self').click()
      })
    cy
      .go('back')
    // .should('have.attr', 'href')
    //.invoke('attr', 'href').should('not.be.empty')
  })
});
*/

/*.click()
.url().should('eq', 'https://staging.christies.com/')
cy
*/
//});


/*
  .get('[href="Auctions Pedro"]').click()


cy
.url().should('include', 'search?entry=pblo')
cy
.get('.chr-search-lots-view__no-results')
.should('exist')
cy
.contains('No available items for “pblo”').should('be.visible')



Then I can visit Private Sales link.
Then I can visit Locations link.
Then I can visit Departments link.
Then I can visit Stories link.
Then I can visit Services link.
*/