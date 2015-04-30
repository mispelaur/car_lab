

function Car(make, model, year, color, state, passengers){
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = [];
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

Car.prototype.off = function(state) {
	//should update the state to off
	this.state = "off";
}

Car.prototype.pickUp = function(passengers) {
	this.passengers.push(passengers);

}

// it('should add the passenger to the passengers array', function(){
//       myCar.start();
//       myCar.pickUp("john");
//       expect(myCar.passengers[0]).to.equal("john");



module.exports=Car;