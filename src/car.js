function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color; 
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;