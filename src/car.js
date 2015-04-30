function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = '';
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
// i should move currentOwner to previousOwner[]
};

Car.prototype.paint = function(newColor){

};


module.exports=Car;