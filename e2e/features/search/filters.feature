Feature: christies.com GSRP filters
  Scenario: visit GSRP and observe filters on page
    When I visit Global Search Result Page.
    Then I can observe searched phrase.
    Then I can observe presence of filter tray.
    Then I can observe presence of search result tabs.