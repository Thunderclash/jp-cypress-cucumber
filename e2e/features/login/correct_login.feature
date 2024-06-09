Feature: login successful
  Scenario: login attempt with existing user login information
    When I visit christies.com page
    Then I click on Sign Up button and modal window opens
    Then I enter valid login information and click Sign In button and I am logged in.