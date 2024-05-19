Feature: 5element site login Page test
  As a user logs into his personal account

  Scenario Outline:
    Given I navigate to 5element.by
    When I open login Page and write "<email>" and "<password>"
    Then I should see a flash message saying <message>

    Examples:
      | email               | password             | message                 |
      | example@example.com | SuperSecretPassword! | Пользователь не найден. |
      | examtwo@example.com | barfoo               | Пользователь не найден. |