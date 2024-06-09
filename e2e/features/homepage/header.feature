Feature: christies.com header buttons
  Scenario: visit homepage and observe presence of important buttons in header
    Given I visit christies.com page
    Then I should see a Christie's Homepage and Sign In button.
    Then I should see a Christie's Homepage and How To Sell button.
    Then I should see all important links in Page Header.