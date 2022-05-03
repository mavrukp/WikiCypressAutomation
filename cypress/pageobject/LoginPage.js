export class LoginPage{

    userNameTextBox(){  
        return cy.get('#wpName1')
    }

    passwdTextBox(){  
        return cy.get('#wpPassword1')
    }
   
    loginButton(){  
        return cy.get('#wpLoginAttempt')
    }

    logoutLink(){  
        return cy.get('#pt-logout')
    }
}