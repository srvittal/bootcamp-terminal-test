const regCheck = require("../regCheck.js");
const assert = require('assert');

describe('Reg check tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal(true, regCheck("CY 123 123", "CY"));
    });

    it('Test uses CA 321 321 as the numPlate & CY as the provCode', function () {
        assert.equal(false, regCheck("CA 321 321", "CY"));
    });

    it('Test uses ND500500 as the numPlate & ND as the provCode', function () {
        assert.equal(true, regCheck("ND500500", "ND"));
    });

    it('Test uses DC 55 YU GP as the numPlate & GP as the provCode', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('Test uses DC 55 YU GP as the numPlate & EC as the provCode', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

});