function Car(make, model, year, color){
  this.year = year;
}

Car.prototype.state = 'off';

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;