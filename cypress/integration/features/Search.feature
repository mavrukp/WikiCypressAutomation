@search-feature
Feature: Advance Search

  I want to open a wikipedia page

  Background:
    Given I navigate to home page

  @tag1
  Scenario: Search from Advance Search dropdown
    And I dropdown the Advance Search
    When I type a search words in These words textbox
    And I select file type as "Image" from "File type" dropdown
    And I select sorting order as "Edit date – current on top" from "Sorting order" dropdown
    And I click the Search button
    Then All selected options are displayed on advanceSearchPreview

  @tag2
  Scenario Outline: Information Popup of any input field should be displayed
    And I dropdown the Advance Search
    When I click on <name> info icon
    Then Info popup should be displayed and contains <name> input text name

    Examples:
      | name                       |
      | These Words                |
      | Exactly this text          |
      | Not these words            |
      | One of these words         |
      | Page title contains        |
      | Subpages of this page      |
      | Pages in these categories  |
      | Pages with these templates |
      | File type                  |
      | Sorting order              |

  @tag3
  Scenario: Invalid input data type in Width and Height textbox
    And I dropdown the Advance Search
    When I select file type as "Image" from "File type" dropdown
    And I type "text" in Width and Height textbox
    And I click the Search button
    Then Warning popup is displayed
