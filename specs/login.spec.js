
var HomePage = require('../pages/home.page.js');
var LoginPage = require('../pages/login.page.js');

describe("Login to the ecommerce application", function(){
    var homePage = new HomePage();
    var loginPage = new LoginPage();

	it("Given I am in login page", async function(){

		await browser.get("http://automationpractice.com/index.php");
		await homePage.navigateToLogin();
		expect(await homePage.signInBtn.isDisplayed()).toBe(true);
	});


	it("When I enter valid username and password", async function(){

		await loginPage.loginToSite("gok@test.com", "Test123");
		expect(await loginPage.accountEle.isDisplayed()).toBeTruthy();

	});

	it("Then I should be able to successfully login to the application", async function(){

		expect(await loginPage.ordersEle.isDisplayed()).toBeTruthy();
		expect(await loginPage.signOutBtn.isDisplayed()).toBeTruthy();
		expect(await loginPage.creditEle.isDisplayed()).toBeTruthy();
	});


});

