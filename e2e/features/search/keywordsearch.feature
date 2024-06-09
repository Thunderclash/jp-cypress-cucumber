Feature: christies.com keyword search
  Scenario: visit homepage and check keyword search functionality
    When I visit christies.com page
    Then Enter keyword in Search Bar
    Then Search Results page opens with searched phrase