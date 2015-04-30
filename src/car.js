function Car(make, model, year, color){
  this.year = year;
}

Car.prototype.state = 'off';

Car.prototype.previousOwners = [];

Car.prototype.currentOwner = 'Manufacturer';

Car.prototype.passengers = '';

Car.prototype.sale = function(newOwner){
  // append newOwner to previous

};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};


module.exports=Car;