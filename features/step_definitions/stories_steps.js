const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am at the homepage', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('http://localhost:3000');
});

Given('a hero has at least one story', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});


When('I click the story button', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});


Then('I am directed to a stories page', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});

Then('I see a list of the hero stories', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});



When('a hero does not have any stories', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});

Then('a story button is not shown', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});