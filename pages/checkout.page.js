module.exports = function () {

	this.proceedToCheckoutBtn = element(by.xpath("//div[@class='button-container']/a[@title='Proceed to checkout']/span"));
	this.checkOutBtn = element(by.css("p.cart_navigation a:nth-child(1)"));
	this.cartQuantityEle = element(by.css("span.ajax_cart_quantity:nth-child(2)"));
	this.deleteBtn = element(by.css("i.icon-trash"));
    this.emptyNotification = element(by.css("p.alert"));

}