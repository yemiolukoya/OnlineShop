Feature: Signin to Online Shop

  Scenario: Signin to Online Shop with valid credentials
    Given I navigate to https://shop.alzheimers.org.uk/
    And I click on sigin link
    When I enter E-Mail Address
    And I enter password
    And I click login button
    Then I should be on the home page

  Scenario Outline: Signin to Online Shop with invalid credentials
    Given I navigate to https://shop.alzheimers.org.uk/
    And I click on sigin link
    When I enter invalid "<E-Mail>" Address
    And I enter invalid "<password>"
    And I click login button
    Then error message should be displayed

    Examples: 
      | E-Mail    | password  |
      | abc@a.com | qawsedrft |
      | abc@b.com | qawsedrft |
      | abc@c.com | qawsedrft |
