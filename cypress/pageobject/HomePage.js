export class HomePage{
    navigate(){
          //cy.visit("https://www.google.com?delay-gLFyf=5000")
        cy.visit("https://en.wikipedia.org/w/index.php?search")
    }

     searchText(text){
       // cy.get('.gLFyf', {timeout:6000}).type(text + ' {enter}')
        cy.get('#ooui-php-1').type(text + ' {enter}')
    } 

    searchButton(){  
        cy.get('.oo-ui-fieldLayout-body button').click()
    }

    advanceSeachDropDown(){  
        //cy.get('[aria-controls="mw-advancedSearch-expandable-options"] > .oo-ui-indicator-down').click
        cy.get('[aria-controls="mw-advancedSearch-expandable-options"] > .oo-ui-indicator-down').click()
    }

    serachInDropdown(){
        cy.get('[aria-controls="mw-advancedSearch-expandable-namespaces"] > .oo-ui-indicator-down').click()
    }

}