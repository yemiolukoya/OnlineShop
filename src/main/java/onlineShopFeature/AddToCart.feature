Feature: Add item to cart

Scenario: Test that user can add item to cart

Given i want to shop on the alzheimers online shop
And I click on a feature product
And I add two items to basket
When I click add to basket
Then two items should be present in the basket
