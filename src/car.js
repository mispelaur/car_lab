function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color; 
}

Car.prototype.state = "off";

Car.prototype.previousOwners = "";

Car.prototype.currentOwner = "Manufacturer"

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;