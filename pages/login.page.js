module.exports = function () {
	 var unameBtn = element(by.css("#email"));
     var pwordBtn = element(by.css("#passwd"));
     var signInBtn = element(by.css("#SubmitLogin"));
     this.accountEle = element(by.css("h1.page-heading"));
     this.ordersEle = element(by.xpath("//a[@title='Orders']"));
     this.signOutBtn = element(by.css("a.logout"));
     this.creditEle = element(by.xpath("//a[@title='Credit slips']"));

     this.loginToSite = async function(username, password) {
     	await unameBtn.sendKeys(username);
     	await pwordBtn.sendKeys(password);
     	await signInBtn.click().then(async function(){
     		await browser.sleep(5000);
     	})
     }
}