function Car(make, model, year, color){
  this.year = year;
  this.state = "off";
  this.previousOwners = 0;
  this.currentOwner = "Manufacturer";
  this.passengers = 0;
}



Car.prototype.sale = function(newOwner){
  this.previousOwners = ["Manufacturer"];
  this.currentOwner = "Charlie";

};

Car.prototype.paint = function(newColor){
  this.color = "Blue";

};

Car.prototype.start = function(newStart){
  this.state = "on";

};

Car.prototype.off = function(newStartOff){
  this.state = "off";

};

Car.prototype.pickUp = function(newPassenger){
  if (this.state === "on") {
    this.passengers = ["john"];
  }
 
};

Car.prototype.dropOff = function(newDropOff){
  if (this.state === "on") {
    this.passengers = "john";
    this.pickUp = "john";
    this.dropOff ="john";
    this.passengers = 0;
  }
 
};

module.exports=Car;