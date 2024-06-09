Feature: christies.com search no results
  Scenario: visit homepage and check keyword search functionality with no results
    When I visit christies.com page
    Then Enter nonsensical keyword in Search Bar
    Then Search Results page does not return any results