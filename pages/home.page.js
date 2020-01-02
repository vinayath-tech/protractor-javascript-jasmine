module.exports = function () {

	var loginBtn = element(by.css("a.login"));
	this.signInBtn = element(by.css("#SubmitLogin"));
	this.dressHeader = element(by.css("ul.sf-menu li:nth-child(1)"));
	this.productLink = element(by.xpath("//li[1]/div[@class='product-container']/div[1]/div"));
	this.searchBox = element(by.css("#search_query_top"));
    this.searchBtn = element(by.css("button.button-search"));

	this.navigateToLogin = async function() {
		await loginBtn.click().then(async function(){
			await browser.sleep(3000);
		});
	}

	this.addToCartBtn = function() {
        return element(by.xpath("//li[1]/div[@class='product-container']/div[2]/div[2]/a[1]"));
    }

    this.searchResultsEle = function(){
        return element(by.cssContainingText("h1.page-heading", "Search"));
    }

    this.searchResData = function(searchData){
        return element(by.xpath("//div[@class='right-block']/h5/a[@title='"+searchData+"']"));
    }

}