const allPaarl = require("../countAllPaarl.js");
const assert = require('assert');

describe('Count all from Paarl tests', function () {

    it('Test uses CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864 as the numPlate', function () {
        assert.equal(2, allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864').length);
    });

    it('Test uses CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864 as the numPlate', function () {
        assert.equal('CJ 678 543', allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')[0]);
    });

    it('Test uses CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864 as the numPlate', function () {
        assert.equal('CJ 67890', allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')[1]);
    });

    it('Test uses CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864 as the numPlate', function () {
        assert.deepEqual(['CJ 678 543','CJ 67890'], allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });

    it('Test uses CL 900, CP 678 543, CA 34567, CP 67890, CN 7864 as the numPlate', function () {
        assert.deepEqual([], allPaarl('CL 900, CP 678 543, CA 34567, CP 67890, CN 7864'));
    });

});