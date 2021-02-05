const Ship = require('../src/Ship.js');

describe('Ship', () => {
it('ship can be created', () => {
  const ship = new Ship()
  expect(ship).toBeInstanceOf(Object);
}) ;
it('has a starting port', () => {
    const ship = new Ship('Dover')
    expect(ship.startingPort).toBe('Dover');
}) ;
});