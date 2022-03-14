Feature: Hero stories
  Hero stories page accessible when hero has stories

  Scenario: Hero is involved in stories
    Given I am at the homepage
    And a hero has at least one story
    When I click the story button
    Then I am directed to a stories page
    And I see a list of the hero stories

  Scenario: Hero is not involved in any stories
    Given I am at the homepage
    When a hero does not have any stories
    Then a story button is not shown
