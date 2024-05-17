Feature: Searching product in search panel 5element.by

  Scenario Outline:
    Given I navigate to 5element.by
    When I looking for a product "<product>" using the search bar
    Then I checking the correctness of the product in <title>

    Examples:
      | product | title                       |
      | iPhone  | Результаты поиска «iPhone»  |
      | Samsung | Результаты поиска «Samsung» |
      | Xiaomi  | Результаты поиска «Xiaomi»  |