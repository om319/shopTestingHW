const { When, Then } = require('@wdio/cucumber-framework');

const logo = browser.$("div[class='header2021-logo']");
const mainMenu = browser.$("div[class='menu-list-container']");
const todaysDeals = browser.$('#trendingBanner_720202');

When("Open Todays Best Deals tab", async () => {
    await todaysDeals.click();
})

When("Click on the Internet shop logo", async () => {
    await logo.click();
})

Then("Check that the main page opened", async () => {
    await expect(mainMenu).toBeExisting();
});