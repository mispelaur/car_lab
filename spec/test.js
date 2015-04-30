// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car("Dodge","Charger", 2015, "Red");
  });

  describe('#year', function(){
    it('should be the current year', function(){
      expect(myCar.year).to.equal(2015);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should exist and initially be empty', function(){
      expect(myCar.previousOwners).to.exist.to.be.empty;
    });
  });

  describe('#currentOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal("Manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should exist and initially be empty', function(){
      expect(myCar.passengers).to.exist.to.be.empty;
    });
  });

  describe('#sale', function(){
    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Charlie");
      expect(myCar.previousOwners[0]).to.equal("Manufacturer");
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Charlie");
      expect(myCar.currentOwner).to.equal("Charlie");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("Blue");
      expect(myCar.color).to.equal("Blue");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array', function(){
      myCar.start();
      myCar.pickUp("john");
      expect(myCar.passengers[0]).to.equal("john");
    });

    xit('should only modify passengers array if car is on', function(){
      // myCar.off();
      myCar.pickUp("john");
      expect(myCar.passengers[0]).to.be.empty;
    });
  });

  describe('#dropOff', function(){
    xit('should remove passenger from the passengers array', function(){
      myCar.start();
      myCar.pickUp("john");
      myCar.dropOff("john");
      expect(myCar.passengers).to.be.empty;
    });

    xit('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pickUp("john");
      myCar.off();
      myCar.dropOff("john");
      expect(myCar.passengers[0]).to.equal("john");
    });
  });

});
