const Itinerary = require('../src/Itinerary.js');
const  Port = require('../src/Port')

describe('Itinerary', () => {
    it('can be can be instantiated', () => {
        expect(Itinerary).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port ('calais');
        const itinerary = new Itinerary([dover,calais]);
        expect(itinerary.ports).toEqual([dover,calais]);
    });
});