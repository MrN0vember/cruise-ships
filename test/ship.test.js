const Ship = require('../src/ship.js');

describe('Ship', () => {
it(' can be instantiated', () => {
  const ship = new Ship()
  expect(ship).toBeInstanceOf(Object);
}) ;
it('has a starting port', () => {
    const ship = new Ship('Dover')
    expect(ship.startingPort).toBe('Dover');
}) ;
});

describe('setSail', () => {
it('can set sail from port', () => {
  const ship = new Ship('Dover')
  ship.setSail();
  expect(ship.startingPort).toBeFalsy()
});
});