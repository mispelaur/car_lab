function Car(make, model, year, color){
  this.year = year;
}

Car.prototype.state = 'off';

Car.prototype.previousOwners = [];

Car.prototype.currentOwner = 'Manufacturer';

Car.prototype.passengers = [];

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function() {
  this.state = 'on';
};

Car.prototype.off = function() {
  this.state = 'off';
};

Car.prototype.pickUp = function(passenger) {
  if (this.state === 'on') {
    this.passengers.push(passenger);
  };
};


module.exports=Car;