import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { HomePage } from "../../../pageobject/HomePage"
import { AdvanceSearchPage } from "../../../pageobject/AdvanceSearchPage"

const homePage = new HomePage()
const advanceSearchPage = new AdvanceSearchPage() 

When(`I navigate to home page and dropdown`, () => {
    homePage.navigate()
    homePage.advanceSeachDropDown() 
});

Then(`I should type a search words in These words textbox`, () => {
     advanceSearchPage.advanceSearchExactlyText('Software Test')   
});