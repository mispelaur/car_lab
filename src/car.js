

function Car(make, model, year, color){
  this.year = year;
  this.state = "off";
  this.previousOwners = "";
  this.currentOwner = "Manufacturer";

  
}



//
//var currentOwner = "Manufacturer";



Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;