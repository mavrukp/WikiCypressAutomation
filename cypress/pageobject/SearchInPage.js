export class SearchInPage{ 

    searchInCheckbox(){  
        return cy.get('.oo-ui-multiselectWidget-group [type="checkbox"]')
    }
    
    searchInSelectedList(){  
        return cy.get('.mw-advancedSearch-namespaceFilter > .oo-ui-tagMultiselectWidget-handle > .oo-ui-tagMultiselectWidget-content > .oo-ui-tagMultiselectWidget-group')
    }
}