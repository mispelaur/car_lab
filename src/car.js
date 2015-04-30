function Car(make, model, year, color){
  this.year = year;
  this.state = "off";
  this.previousOwners = 0;
  this.currentOwner = "Manufacturer";
  this.passengers = 0;
}



Car.prototype.sale = function(newOwner){
  this.previousOwners = ["Manufacturer"];


};

Car.prototype.paint = function(newColor){

};


module.exports=Car;