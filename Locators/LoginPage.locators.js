export const LoginPageLocators = {

        txtUsername:'#user-name',
        txtPassword:'#password',
        btnLogin:'#login-button',
        txtInvalidErrorMsg: (errorMsg) =>`//h3[text()="${errorMsg}"]`
            


}

