import loginPage from '../pageObjects/login.js'
import combosPage from '../pageObjects/combos.js'

describe('Login Suit', function () {

    it('should login into the app', function () {
        loginPage.emailField.setValue("android-challenge@parrotsoftware.io");
        loginPage.passwordField.setValue("8mngDhoPcB3ckV7X");
        loginPage.loginButton.click();
        expect(combosPage.combosEspeciales).toBeDisplayed();
    });

    it('should display diferent layout when devices orientation is changed', function () {
        browser.orientation('landscape');
        var orientation = browser.orientation();
        console.log(orientation.value);
    });

    it('should display a message when incorrect credentials', function () {
        loginPage.emailField.setValue("android-challenge@parrotsoftware.io");
        loginPage.passwordField.setValue("8mngDhoPcB3ckV7X");
        loginPage.loginButton.click();
        expect(loginPage.errorMessage).toBeDisplayed();
    });

    it('should remain loged if correct login', function () {
        browser.reloadSession();
        expect(combosPage.combosEspeciales).toBeDisplayed();
    });

    it('should keep user info when landcape mode', function () {
        loginPage.emailField.setValue("keep");
        loginPage.passwordField.setValue("info");
        browser.orientation('landscape');
        expect(loginPage.emailField).toHaveText('keep', {trim:true});
        expect(loginPage.passwordField).toHaveText('keep', {trim:true});
    });
});