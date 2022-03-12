/// <reference types="cypress" />

import { HomePage } from "../pageobject/HomePage"
import { AdvanceSearchPage } from "../pageobject/AdvanceSearchPage"

describe('Advanced search', () => {
    const homePage = new HomePage()
    const advanceSearchPage = new AdvanceSearchPage()
     before(()=>{
       homePage.navigate()
    }) 
    
    it('should advance search dropdown is opened', ()=>{
        homePage.navigate()

        homePage.advanceSeachDropDown()
    
    })

    it('should type a search words in "These words" textbox', ()=>{
       advanceSearchPage.advanceSearchExactlyText('Software Test')   
    })

    it('should select file type as "Image" from "File type" dropdown', ()=>{
        advanceSearchPage.advanceSearchSelectFileType('Image')   
     })

     it('should select sorting order as "Edit date – current on top" from "Sorting order" dropdown', ()=>{
        advanceSearchPage.advanceSearchSelectSortingOrder('Edit date – current on top')
     })

     it('should info popup displayed when ckilck on "These Words" info icon', ()=>{
        advanceSearchPage.advanceSearchInfoIcon().eq(0).click()
        advanceSearchPage.advanceSearchInfoIconPopUp().contains('These words')
        advanceSearchPage.advanceSearchInfoIcon().eq(0).click()
  
    })

    it('should all selected options are displayed on advanceSearchPreview after click search button', ()=>{
        homePage.searchButton()
        advanceSearchPage.advanceSearchPreview().children().should('have.length', 4) 
    })

    it('should warning message be displayed on search page when user types invalid input in with and height for file type', ()=>{
        homePage.advanceSeachDropDown()
        advanceSearchPage.advanceSearchSelectFileWidth().type('text')
        advanceSearchPage.advanceSearchSelectFileHeight().type('text')
        homePage.advanceSeachDropDown()
        homePage.searchButton()
        advanceSearchPage.advanceSearchWidthHeightWarning().should('include.text','A warning has occurred while searching:')
        advanceSearchPage.advanceSearchWidthHeightWarning()
        .should('include.text','The search term \'filew\' requires numeric values, but \'text\' was provided.')
        advanceSearchPage.advanceSearchWidthHeightWarning()
        .should('include.text','The search term \'fileh\' requires numeric values, but \'text\' was provided.')   
    })


    
})