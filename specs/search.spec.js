var HomePage = require('../pages/home.page.js');


describe("Search a dress", function(){
    var homePage = new HomePage();

	it("Given I Navigate to homepage", async function(){

		await browser.get("http://automationpractice.com/index.php");
			await homePage.dressHeader.isDisplayed().then(async()=>{
				await homePage.dressHeader.click();
				await browser.sleep(3000);
			});
	});

	it("When I search for a dress", async function () {
		await homePage.searchBox.sendKeys("Summer dress");
		await browser.sleep(1500);
    	await homePage.searchBtn.click().then(async()=>{
        	expect(await homePage.searchResultsEle().isDisplayed()).toBe(true);
    	});
	});

	it("Then I should be able to see the relevant search results", async function () {

		var searchResults = [ "Printed Summer Dress", 
							  "Printed Summer Dress", 
							  "Printed Chiffon Dress", 
							  "Faded Short Sleeve T-shirts" ];


		for(var i=0; i<=searchResults.length-1; i++) {
			console.log("Results are " + searchResults[i]);
			expect(await homePage.searchResData(searchResults[i])).toBeTruthy();

			if(homePage.searchResData(searchResults[i])){
			      var actData = homePage.searchResData(searchResults[i]).getText();
			      var expData = searchResults[i];

			      expect(actData).toEqual(expData);
     		}
		}
	});
});