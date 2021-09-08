const countRegNumber = require("../countRegNumber.js");
const assert = require('assert');

describe('Count reg number tests', function () {

    it('Test uses CY 123 123,CA 321 321 as the regString', function () {
        assert.equal(2, countRegNumber("CY 123 123,CA 321 321"));
    });

    it('Test uses CY 123 123,CA 321 321,CY 123 123,CA 321 321 as the regString', function () {
        assert.equal(4, countRegNumber("CY 123 123,CA 321 321,CY 123 123,CA 321 321"));
    });

    it('Test uses CA 182736,CY 523519,CJ 812328 as the regString', function () {
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });

    it('Test uses CA 182736 as the regString', function () {
        assert.equal(countRegNumber('CA 182736'), 1);
    });

    it('Test uses CA 182736,CA 182736,CY 523519,CJ 812328,CY 123 123,CA 321 321,CY 123 123,CA 321 321 as the regString', function () {
        assert.equal(countRegNumber('CA 182736,CA 182736,CY 523519,CJ 812328,CY 123 123,CA 321 321,CY 123 123,CA 321 321'), 8);
    });

});