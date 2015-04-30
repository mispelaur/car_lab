function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = [];
  this.newOwner = "Charlie";
  this.color = "Blue";
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
// i should move currentOwner to previousOwner[]

  this.currentOwner = newOwner;
// this function should update currentOwner with the new Owner
};

Car.prototype.start = function(state){
  this.state = "on";
}

Car.prototype.off = function(state){
  this.state = "off";
}

Car.prototype.pickUp = function(passengers){
  // this.passengers.push("john");
  if (this.state === "on"){
    this.passengers.push(passengers);
  }
}

Car.prototype.dropOff = function(passengers){
  this.passengers.shift(passengers);
}

Car.prototype.paint = function(newColor){

};


module.exports=Car;