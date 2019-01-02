function Phone(brand, price, color, display, camera) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.display = display;
  this.camera = camera;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is" + this.color + ", and the price is " + this.price + ". Also display is " + this.display + ", and camera is " + this.camera + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", 689, "black", "5.1 inches", "16 Mpx");
SamsungGalaxyS6.printInfo();

var iPhone6S = new Phone("iPhone 6S", 1249, "silver", "4.7 inches", "12 Mpx");
iPhone6S.printInfo();

var OnePlusOne = new Phone("OnePlus One", 1899, "white", "6.3 inches", "16 Mpx");
OnePlusOne.printInfo();

var Huawei = new Phone("Huawei Mate 20 Pro", 3899, "gray", "6.4 inches", "20 Mpx");
Huawei.printInfo();

var Nokia7 = new Phone("Nokia 7.1", 2399, "blue", "5.8 inches", "12 Mpx");
Nokia7.printInfo();
