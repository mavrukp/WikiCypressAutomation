/// <reference types="cypress" />

import { HomePage } from "../pageobject/HomePage"

describe('search text', () => {
    const homePage = new HomePage()
    beforeEach(()=>{
       homePage.navigate()
       homePage.searchText('cypress')
    })
    
    it('should click search button', ()=>{

        homePage.searchButton()

        cy.get('.searchresults').contains('cypress')
    
        // cy.contains("cypress")
    
    })
    
})

