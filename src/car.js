function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color; 

  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  this.previousOwners = ["Manufacturer"];
  this.currentOwner = ("Charlie");
};

Car.prototype.paint = function(newColor){
  this.color = "Blue";
};

Car.prototype.start = function(newState){
  this.state = "on";
}

Car.prototype.off = function(turnOff){
  this.state = "off";
}

Car.prototype.pickUp = function(carPool) {
  if (this.state === "on") {
    this.passengers = ["john"];
  } else if (this.state === "off") {
    this.passengers = [];
  }; 
}


module.exports=Car;