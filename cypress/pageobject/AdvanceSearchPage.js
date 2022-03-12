export class AdvanceSearchPage{ 

    advanceSearchExactlyText(text){  

        cy.get('#ooui-33', {timeout:6000}).type(text)
    }
    
    advanceSearchSelectFileType(text){
        cy.get('#advancedSearchField-filetype').click()
        cy.get('.oo-ui-labelElement-label').contains(text).click()
    }

    advanceSearchSelectFileWidth(){
        return cy.get('#advancedSearchField-filew input')
    }

    advanceSearchSelectFileHeight(){
        return cy.get('#advancedSearchField-fileh input')
    }

    advanceSearchWidthHeightWarning(){
        return cy.get('.mw-message-box.mw-message-box-warning.warningbox')
    }

    advanceSearchSelectSortingOrder(text){
        cy.get('#advancedSearchField-sort').click()
        //cy.get('select').select('last_edit_desc')
        cy.get('.oo-ui-labelElement-label').contains(text).click()
        //cy.get('#ooui-66').click()
    }

    advanceSearchPreview(){
        return cy.get('.mw-advancedSearch-searchPreview')
    }

    advanceSearchInfoIcon(){
        //return cy.get(':nth-child(1) > .oo-ui-fieldsetLayout-group > :nth-child(1) > .oo-ui-fieldLayout-body > .oo-ui-fieldLayout-help > .oo-ui-buttonElement-button > .oo-ui-iconElement-icon')
        return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button')
    }

    advanceSearchInfoIconPopUp(){    
        return cy.get('.oo-ui-popupWidget-anchored-top > .oo-ui-popupWidget-popup')
        //cy.get('[style="top: 341.922px; left: 306px;"] > .oo-ui-popupWidget-popup')
    }


  
}