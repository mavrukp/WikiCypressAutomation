export class AdvanceSearchPage{ 

    advanceSearchExactlyText(text){  

        cy.get('#ooui-33', {timeout:6000}).type(text)
    }
    
    advanceSearchSelectFileType(){
        cy.get('#advancedSearchField-filetype').click()
        cy.get('div:nth-of-type(11) > div:nth-of-type(3) > .oo-ui-labelElement-label').click()
    }

    advanceSearchSortingOrder(){
        cy.get('#advancedSearchField-sort').click()
        //cy.get('select').select('last_edit_desc')
        cy.get('#ooui-66').click()
    }
}