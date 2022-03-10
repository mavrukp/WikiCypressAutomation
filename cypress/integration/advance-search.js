/// <reference types="cypress" />

import { HomePage } from "../pageobject/HomePage"
import { AdvanceSearchPage } from "../pageobject/AdvanceSearchPage"

describe('advance search text', () => {
    const homePage = new HomePage()
    const advanceSearchPage = new AdvanceSearchPage()
/*     beforeEach(()=>{
       homePage.navigate()
    }) */
    
    it('should click advance search dropdown', ()=>{
        homePage.navigate()

        homePage.advanceSeachDropDown()
    
    })

    it('should type advance search texts', ()=>{
       advanceSearchPage.advanceSearchExactlyText('Software Test')   
    })

    it('should select advance search file types', ()=>{
        advanceSearchPage.advanceSearchSelectFileType()   
     })

     it('should select advance search sorting order', ()=>{
        advanceSearchPage.advanceSearchSortingOrder() 
     })

     it('should click search button', ()=>{

        homePage.searchButton()

        cy.get('.mw-advancedSearch-searchPreview').children().should('have.length', 4)
    
    })
    
})