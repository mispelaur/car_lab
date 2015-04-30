function Car(make, model, year, color, state, previousOwners){
  this.year = year;
  this.state = 'off';
  this.previousOwners = '';
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;