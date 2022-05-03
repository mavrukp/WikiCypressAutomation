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
        return cy.get('.mw-message-box-warning')
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

    advanceSearchInfoIcon(text){
   
        if (text === 'These Words') 
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(0)               
        if (text === 'Exactly this text')  
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(1)         
        if (text === 'Not these words' )  
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(2)          
        if (text === 'One of these words') 
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(3)         
        if (text === 'Page title contains')  
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(4)       
        if (text === 'Subpages of this page')
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(5)       
        if (text === 'Pages in these categories')
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(6)   
        if (text === 'Pages with these templates')
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(7)  
        if (text === 'File type')   
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(8)                
        if (text === 'Sorting order')  
            return cy.get('.oo-ui-fieldLayout-help .oo-ui-buttonElement-button').eq(11)             
        
    }

    advanceSearchInfoIconPopUp(){    
        return cy.get('.oo-ui-popupWidget-popup')
    }


  
}