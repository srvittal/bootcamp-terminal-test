const transportFee = require("../transportFee.js");
const assert = require('assert');

describe('Transport fee tests', function () {

    it('Test uses morning as the shift', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('Test uses afternoon as the shift', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('Test uses night as the shift', function () {
        assert.equal(transportFee('nightshift'), 'free');
    });

    it('Test uses morn as the shift', function () {
        assert.equal(transportFee('morn'), 'R20');
    });

    it('Test uses noon as the shift', function () {
        assert.equal(transportFee('noon'), 'R10');
    });

});