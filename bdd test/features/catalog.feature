Feature: Opens the catalog menu and selects the desired item

  Scenario Outline:
    Given I navigate to 5element.by
    When I go to the catalog menu on page
    Then I should a "<title>" page name

    Examples:
      | title             |
      | Техника для кухни |