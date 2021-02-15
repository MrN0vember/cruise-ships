const Ship = require('../src/ship.js');
const Port = require('../src/Port.js');

let ship, port, dover, calais;
    beforeEach(() => {
     dover = new Port('Dover')
     calais = new Port('Calais')
     ship = new Ship(dover);
    });

describe('Ship', () => {
  
it(' can be instantiated', () => {
  const ship = new Ship()
  expect(ship).toBeInstanceOf(Object);
}) ;
it('has a starting port', () => {
    expect(ship.startingPort).toBe(dover);
}) ;
});

describe('setSail', () => {
  it('can set sail from port', () => {
  ship.setSail();
  expect(ship.currentPort).toBeFalsy()
});
});

describe('dock', () => {
  
  it('can dock at a new port', () => {
    ship.setSail();
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
  
});