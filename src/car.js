function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color; 
}

Car.prototype.state = "off";

Car.prototype.previousOwners = [];

Car.prototype.currentOwner = "Manufacturer"

Car.prototype.passengers = [];

Car.prototype.sale = function(newOwner){
  this.previousOwners = ["Manufacturer"];
  this.currentOwner = ("Charlie");
};

Car.prototype.paint = function(newColor){
  this.color = "Blue";
};


module.exports=Car;