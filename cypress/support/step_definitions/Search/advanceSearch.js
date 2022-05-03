import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { HomePage } from "../../../pageobject/HomePage"
import { AdvanceSearchPage } from "../../../pageobject/AdvanceSearchPage"

const homePage = new HomePage()
const advanceSearchPage = new AdvanceSearchPage() 

Given(`I navigate to home page`, () => {
    homePage.navigate()
});

Given(`I dropdown the Advance Search`, () => {
    homePage.advanceSeachDropDown() 
});

When(`I type a search words in These words textbox`, () => {
     advanceSearchPage.advanceSearchExactlyText('Software Test')   
});

When(`I select file type as {string} from "File type" dropdown`, (image) => {
    advanceSearchPage.advanceSearchSelectFileType(image)   
});

When(`I select sorting order as {string} from "Sorting order" dropdown`, (order) => {
    advanceSearchPage.advanceSearchSelectSortingOrder(order)   
});

When(`I click the Search button`, () => {
    homePage.searchButton()
});

When(`I click on {} info icon`, (name) => {
    advanceSearchPage.advanceSearchInfoIcon(name).click()
});

When(`I type {string} in Width and Height textbox`, (text) => {
    advanceSearchPage.advanceSearchSelectFileWidth().type(text)
    advanceSearchPage.advanceSearchSelectFileHeight().type(text)
    homePage.advanceSeachDropDown()
});

Then(`Warning popup is displayed`, () => {
    advanceSearchPage.advanceSearchWidthHeightWarning().should('include.text','A warning has occurred while searching:')
    advanceSearchPage.advanceSearchWidthHeightWarning()
        .should('include.text','The search term \'filew\' requires numeric values, but \'text\' was provided.')
    advanceSearchPage.advanceSearchWidthHeightWarning()
        .should('include.text','The search term \'fileh\' requires numeric values, but \'text\' was provided.')   

});

Then(`Info popup should be displayed and contains {} input text name`, (name) => {
    advanceSearchPage.advanceSearchInfoIconPopUp().contains(name, { matchCase: false })
    advanceSearchPage.advanceSearchInfoIcon(name).click()
});

Then(`All selected options are displayed on advanceSearchPreview`, () => {
    advanceSearchPage.advanceSearchPreview().children().should('have.length', 4)
});

