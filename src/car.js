

function Car(make, model, year, color){
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = "";
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	



};

Car.prototype.paint = function(newColor){

};


module.exports=Car;