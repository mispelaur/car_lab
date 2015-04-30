

function Car(make, model, year, color,state){
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = "";
}





Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);

	//should update currentOwner with the new owner
	this.currentOwner = newOwner;
	
};

Car.prototype.paint = function(newColor){

	//should update the color of myCar
  this.color = newColor;
};

Car.prototype.start = function(state) {
	//should update the state to on
	this.state = "on";
}


module.exports=Car;