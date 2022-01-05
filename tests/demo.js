module.exports = {
    'Load home page of Automation practice'(browser) {
        browser
            .url('http://automationpractice.com')
            .waitForElementVisible('#header')
            .pause(10000)
            .assert.visible("#header")
    }
}
