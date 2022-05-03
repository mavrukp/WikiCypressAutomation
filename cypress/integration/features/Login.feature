@login-feature
Feature: Login test

  I want to test login with valid and invalid parameters

  @tag1
  Scenario: Login with valid credentials
    Given I navigate to home page
    And I click on Login link
    When I enter valid username "validname" and password "validpassword"
    And I click on login button
    Then I loggged in sucessfully

