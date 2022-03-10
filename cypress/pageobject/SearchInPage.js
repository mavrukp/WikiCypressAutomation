export class SearchInPage{ 

    advanceSearchExactlyText(text){  

        cy.get('#ooui-33', {timeout:6000}).type(text)
    }
    
}