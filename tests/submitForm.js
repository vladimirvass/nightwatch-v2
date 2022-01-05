module.exports = {
    '@tags': ['login'],
    'Submit simple login form'(browser) {
        const userName = '#username';
        const password = '#password';
        const btnLogin = '.radius';
        const txtGreeting = '#flash';
        const btnSignout = '.icon-signout';

        browser
            .windowMaximize()
            .url('http://the-internet.herokuapp.com/login')
            .setValue(userName, 'tomsmith')
            .setValue(password, 'SuperSecretPassword!')
            .click(btnLogin)        
            .assert.containsText(txtGreeting, 'You logged into a secure area!') // no msg
            .assert.containsText(txtGreeting, 'You logged into a secure area!', 'Verify if an element contains given text') // custom msg
            .assert.elementPresent(btnSignout) // no msg
            .assert.elementPresent(btnSignout, 'Logout button presents after login'); // custom msg            
    }
}
