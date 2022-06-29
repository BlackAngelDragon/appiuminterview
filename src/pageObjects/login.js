const emailField = "//android.widget.EditText[@resource-id='io.parrotsoftware.qatest:id/editEmail']",
      passwordField = '//android.widget.EditText[@resource-id="io.parrotsoftware.qatest:id/editPassword"]',
      loginButton = '//android.widget.Button[@resource-id="io.parrotsoftware.qatest:id/btnLogin"]',
      errorMessage = '//*[@text="error al inciar sesion"]';

class login {
    get emailField() {
        $(emailField).waitForDisplay({timeout: 5000});
        return $(emailField);
    }
    get passwordField() {
        $(passwordField).waitForDisplay({timeout: 5000});
        return $(passwordField);
    }
    get loginButton() {
        $(loginButton).waitForDisplay({timeout: 5000});
        return $(loginButton);
    }
    get errorMessage() {
        $(errorMessage).waitForDisplay({timeout: 5000});
        return $(errorMessage);
    }

}

export default new login()