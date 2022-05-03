import { When, Then, Given } from "cypress-cucumber-preprocessor/steps"
import { HomePage } from "../../../pageobject/HomePage"
import { LoginPage } from "../../../pageobject/LoginPage";

const homePage = new HomePage()
const loginPage = new LoginPage()

Given(`I navigate to home page`, () => {
    homePage.navigate()
});

Given(`I click on Login link`, () => {
    homePage.loginLink().click()  
});

When(`I enter valid username {string} and password {string}`, (username,password) => {
    loginPage.userNameTextBox().type(username) 
    loginPage.passwdTextBox().type(password)
});

When(`I click on login button`, () => {
    loginPage.loginButton().click()

});

Then(`I loggged in sucessfully`, () => {
    loginPage.logoutLink().should('be.visible')

});