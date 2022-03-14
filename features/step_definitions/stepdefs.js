const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, WebElement} = require('selenium-webdriver');

require("chromedriver");
const assert = require('assert')
const {screen} = require("@testing-library/react");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();


Given('I am on the homepage', async function () {
    await driver.get('http://localhost:3000');
    let titleText = await driver.findElement(By.tagName("h1")).getText();
    assert.equal(titleText, "Avengers");
});


Given('Heroes are shown with event', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('I click the event button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I am directed to an events page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
