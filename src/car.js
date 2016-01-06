function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
}

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
  if (this.state === "on") {
    this.passengers.push(passenger);
  }
};

Car.prototype.dropOff = function(passenger) {
  if (this.state === 'on') {
    for (i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i] === passenger) {
        this.passengers.splice(i, 1);
      }
    }
// Alternative for going through an array when the array item is known:
// 
// var passengerIndex = this.passengers.indexOf(passengers);
// this.passengers.splice(passengerIndex, 1);

  }
} 

module.exports=Car;