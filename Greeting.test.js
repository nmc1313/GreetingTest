const Greeting = require('./UnitTesting')


describe('greet everyone', () => {
    test('should greet empty name', () => {
        expect(Greeting()).toEqual('Hi there!');
    })
    test('should shout when shouted at', ()=>{
        expect(Greeting('LIAM')).toEqual('HI, LIAM');
    })
    test('should greet multiple people', () => {
        expect(Greeting(['Mary', 'Manny', 'Polly'])).toEqual('Hi, Mary, Manny, Polly');
    })


})