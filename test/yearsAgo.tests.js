const yearsAgo = require("../yearsAgo.js");
const assert = require('assert');

describe('Years ago tests', function () {

    it('Test uses 1998 as the num', function () {
        assert.equal(23, yearsAgo(1998));
    });

    it('Test uses 1949 as the num', function () {
        assert.equal(72, yearsAgo(1949));
    });

    it('Test uses 1976 as the num', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('Test uses 2000 as the num', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

    it('Test uses 1889 as the num', function () {
        assert.equal((new Date().getFullYear() - 1889), yearsAgo(1889));
    });

});