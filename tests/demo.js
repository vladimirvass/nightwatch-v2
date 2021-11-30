module.exports = {
    'Load home page of Automation practice'(browser) {
        browser
            .url('http://automationpractice.com')
            .waitForElementVisible('#header')
            .assert.visible("#header")
    }
}
