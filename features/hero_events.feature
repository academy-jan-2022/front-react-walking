Feature: Hero events
  Hero events page accessible when hero has events

  Scenario: Hero has event
    Given I am on the homepage
    And Heroes are shown with event
    When I click the event button
    Then I am directed to an events page