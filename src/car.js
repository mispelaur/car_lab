function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = '';
  this.newOwner = "Charlie";
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
// i should move currentOwner to previousOwner[]

  this.currentOwner = newOwner;
// this function should update currentOwner with the new Owner
};

Car.prototype.paint = function(newColor){

};


module.exports=Car;