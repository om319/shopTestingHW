const { Given, When, Then } = require('@wdio/cucumber-framework');

const searchBar = browser.$('input[type="search"]');
const searchButton = browser.$('div[class="header2021-search-button"]');

Given("Open newegg homepage", async () => {
    await browser.url(`https://www.newegg.com`);
});

When("Enter windows into search bar and pressing search", async () => {
    await searchBar.clearValue();
    await searchBar.setValue("windows");
    await searchButton.click();
})

Then("I am checking that at least one item is present", async () => {
    //TODO looks like this is not real items
    const items = await browser.$('div[class="list-wrap"]').$$('div[class="item-cell"]');
    await expect(items.length >= 1);
});