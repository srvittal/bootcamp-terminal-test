const greet = require("../greet.js");
const assert = require('assert');

describe('Greet tests' , function(){

    it('Test uses Sudarshan as the neighbourName' , function(){
        assert.equal("Hello, Sudarshan",greet("Sudarshan"));
    });

    it('Test uses Jack as the neighbourName' , function(){
        assert.deepEqual("Hello, Jack",greet("Jack"));
    });

    it('Test uses Jill as the neighbourName' , function(){
        assert.equal("Hello, Jill",greet("Jill"));
    });

    it('Test uses Bob as the neighbourName' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
    });

    it('Test uses Sam as the neighbourName' , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});