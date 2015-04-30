

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
	if (this.state === "on") {
		this.passengers.push(passengers);
	} else {
		this.passenger = [];
	}
	
}

Car.prototype.dropOff = function(passengers) {
	this.passengers.pop(passengers);
	if (this.state === "off") {
		this.passengers.push(passengers);
} 

}



// it('should leave passenger in the passengers array if car is off', function(){
//       myCar.start();
//       myCar.pickUp("john");
//       myCar.off();
//       myCar.dropOff("john");
//       expect(myCar.passengers[0]).to.equal("john");



module.exports=Car;