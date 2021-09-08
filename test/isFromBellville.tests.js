const isFromBellville = require("../isFromBellville.js");
const assert = require('assert');

describe('Is from Bellville tests', function () {

    it('Test uses CY as the numPlate', function () {
        assert.equal(true, isFromBellville("CY"));
    });

    it('Test uses Jack as the numPlate', function () {
        assert.deepEqual(false, isFromBellville("Jack"));
    });

    it('Test uses CA 123 123 as the numPlate', function () {
        assert.equal(false, isFromBellville("CA 123 123"));
    });

    it('Test uses CY 321 321 as the numPlate', function () {
        assert.equal(true, isFromBellville("CY 321 321"));
    });

    it('Test uses CY 123 as the numPlate', function () {
        assert.equal(isFromBellville('CY 123'), true);
    });

});