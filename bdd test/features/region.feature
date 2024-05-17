Feature: The user can change the region

  Scenario Outline:
    Given I navigate to 5element.by
    When I switch region Minsk to "<name>"
    Then I check the selected "<regionName>" on the website

    Examples:
      | name       | regionName |
      | Барановичи | Барановичи |
      | Брест      | Брест      |