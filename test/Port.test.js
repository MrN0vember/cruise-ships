const Port = require('../src/Port.js');

describe('Port', () => {
    let port;
    beforeEach(() => {
        port = new Port("Dover");
    });

    it('can be can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Port)
    });

    it('checks port has a name', () => {
       expect(port.name).toBe('Dover') 
    });

}) ;