var HomePage = require("../pages/home.page.js");
var CheckoutPage = require("../pages/checkout.page.js");


describe("Checkout a dress", function(){
	var homePage = new HomePage();
	var checkoutPage = new CheckoutPage();


	async function setUpNavigationTest(){
	
			await browser.get("http://automationpractice.com/index.php");
			await homePage.dressHeader.isDisplayed().then(async()=>{
				await homePage.dressHeader.click().then(async()=>{
					await browser.sleep(2000);
					await homePage.productLink.isDisplayed().then(async()=>{
						await browser.actions().mouseMove(homePage.productLink).perform();
						expect(await homePage.addToCartBtn().isDisplayed()).toBe(true);
						await browser.sleep(2000);
					});
				});
			});

			//Add a dress to checkout component
			await homePage.addToCartBtn().click().then(async()=>{
				await browser.sleep(2000);
        		expect(await checkoutPage.proceedToCheckoutBtn.isDisplayed()).toBe(true);
  			});

  			//verify checkout
  			await checkoutPage.proceedToCheckoutBtn.click().then(async()=>{
        		  expect(await checkoutPage.checkOutBtn.isDisplayed()).toBe(true);
   			})
	}


	describe("Verify Checkout functionality", function(){
		
		beforeAll(function () {
			setUpNavigationTest();
		});

		it("Then the dress should be successfully added to the cart", async function(){
			 expect(await checkoutPage.cartQuantityEle.getText()).toEqual("1");
		});

		it("And I should be navigated to the checkout page", async function(){
			await checkoutPage.checkOutBtn.click();
		});

	});

	describe("Delete a product", function(){

		beforeAll(function () {
			setUpNavigationTest();
		});

		it("When I remove the product", async function() {
			await checkoutPage.deleteBtn.click();
   			await browser.sleep(2000);
		});

		it("Then the product should be successfully removed", async function(){

			await checkoutPage.emptyNotification.getText().then(async(actText)=>{
       					expect(actText).toEqual("Your shopping cart is empty.");
    		});
		});

	});
});