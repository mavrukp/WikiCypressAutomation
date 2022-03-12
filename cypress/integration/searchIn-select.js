/// <reference types="cypress" />

import { HomePage } from "../pageobject/HomePage"
import { SearchInPage } from "../pageobject/SearchInPage"

describe('searchin selection test', () => {
    const homePage = new HomePage()
    const searchInPage = new SearchInPage()
    before(()=>{
       homePage.navigate()
    })
    
    it('should searchin dropdown is opened', ()=>{

      homePage.serachInDropdown()

      searchInPage.searchInCheckbox().should('be.checked')

      searchInPage.searchInCheckbox().uncheck('defaultNamespaces').should('not.be.checked')
    })

    it('should each checkbox be checked in order', ()=>{
 
      searchInPage.searchInCheckbox().check('defaultNamespaces').should('be.checked')
 
      searchInPage.searchInCheckbox().check('discussion').should('be.checked')

      searchInPage.searchInCheckbox().check('generalHelp').should('be.checked')

      searchInPage.searchInCheckbox().check('all').should('be.checked')
     })

     it('should the "All" checkbox is unchecked when any other checkbox is unchecked', ()=>{
 
      searchInPage.searchInCheckbox().uncheck('defaultNamespaces').should('not.be.checked')

      searchInPage.searchInCheckbox().get(3).should('not.be.checked')

     })

     it('should selected search category count be 28 when the All checkbox is checked', ()=>{
      searchInPage.searchInCheckbox().check('all').should('be.checked')
      searchInPage.searchInSelectedList().children().should('have.length', 28)
     })

     it('should selected search category count be 0 when the All checkbox is unchecked', ()=>{
      searchInPage.searchInCheckbox().uncheck('all').should('not.be.checked')
      searchInPage.searchInSelectedList().children().should('have.length', 0)
     })

     it('should selected search category count be 0 when each checkbox is unchecked in order', ()=>{
      searchInPage.searchInCheckbox().check('all').should('be.checked')

      searchInPage.searchInCheckbox().uncheck('defaultNamespaces').should('not.be.checked')
 
      searchInPage.searchInCheckbox().uncheck('discussion').should('not.be.checked')

      searchInPage.searchInCheckbox().uncheck('generalHelp').should('not.be.checked')

      searchInPage.searchInCheckbox().uncheck('all').should('not.be.checked')
      searchInPage.searchInSelectedList().children().should('have.length', 0)
     })
    
    
})
