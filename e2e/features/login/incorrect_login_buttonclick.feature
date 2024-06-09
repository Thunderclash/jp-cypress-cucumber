Feature: login - incorrect login information
  Scenario: login attempt with invalid login information
    When I visit christies.com page
    Then I click on Sign Up button and modal window opens
    Then I enter invalid login information and click Sign In button and I am presented with error message.