Feature: login - incorrect login information
  Scenario: login attempt with invalid login information by pressing Enter
    When I visit christies.com page
    Then I click on Sign Up button and modal window opens
    Then I enter invalid login information and press Enter keyboard button and I am presented by error message