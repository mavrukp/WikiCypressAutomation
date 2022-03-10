/// <reference types="cypress" />

import { HomePage } from "../pageobject/HomePage"

describe('searchin selection test', () => {
    const homePage = new HomePage()
    before(()=>{
       homePage.navigate()
    })
    
    it('should searchin dropdown open', ()=>{

       homePage.serachInDropdown()

       cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]').should('be.checked')

       cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
       .uncheck('defaultNamespaces').should('not.be.checked')
    })

    it('should check the "All" checkbox', ()=>{
 
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .check('defaultNamespaces')
        .should('be.checked')
 
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .check('discussion').should('be.checked')

        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .check('generalHelp').should('be.checked')

        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .check('all').should('be.checked')
     })

     it('should the "All" checkbox is unchecked when any other checkbox is unchecked', ()=>{
 
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .uncheck('defaultNamespaces')
        .should('not.be.checked')

        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]').get(3)
        .should('not.be.checked')

     })

     it('should selected count be 28 when all checkbox checked', ()=>{
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .check('all').should('be.checked')
        cy.get('.mw-advancedSearch-namespaceFilter > .oo-ui-tagMultiselectWidget-handle > .oo-ui-tagMultiselectWidget-content > .oo-ui-tagMultiselectWidget-group').children().should('have.length', 28)
     })

     it('should selected count be 0 when all checkbox unchecked', ()=>{
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .uncheck('all').should('not.be.checked')
        cy.get('.mw-advancedSearch-namespaceFilter > .oo-ui-tagMultiselectWidget-handle > .oo-ui-tagMultiselectWidget-content > .oo-ui-tagMultiselectWidget-group').children().should('have.length', 0)
     })

     it('should selected count be 0 when each checkbox is unchecked in order', ()=>{
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .check('all').should('be.checked')

        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .uncheck('defaultNamespaces')
        .should('not.be.checked')
 
        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .uncheck('discussion').should('not.be.checked')

        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .uncheck('generalHelp').should('not.be.checked')

        cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
        .uncheck('all').should('not.be.checked')
        cy.get('.mw-advancedSearch-namespaceFilter > .oo-ui-tagMultiselectWidget-handle > .oo-ui-tagMultiselectWidget-content > .oo-ui-tagMultiselectWidget-group').children().should('have.length', 0)
     })
    
    
})
