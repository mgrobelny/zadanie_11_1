// scripts.js
function Phone (brand, producer, price, color) {
    this.brand = brand;
    this.producer = producer;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", producer is " + this.producer + ", color is " + this.color + " and the price is PLN " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", "Samsung", 1150, "silver");
SamsungGalaxyS6.printInfo();

var iPhone6s = new Phone("iPhone 6s", "Apple", 1799, "black");
iPhone6s.printInfo();

var OnePlusOne = new Phone("OnePlus One", "OnePlus", 1299, "black");
OnePlusOne.printInfo();

var SonyXperiaXz1 = new Phone("Sony Xperia XZ1", "Sony", 2999, "light-red");
SonyXperiaXz1.printInfo();