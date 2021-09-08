const isWeekday = require("../isWeekday.js");
const assert = require('assert');

describe('Is weekday tests', function () {

    it('Test uses Saturday as the dayName', function () {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('Test uses Monday as the dayName', function () {
        assert.equal(isWeekday('Monday'), true);
    });

    it('Test uses Wed as the dayName', function () {
        assert.equal(isWeekday('Wed'), true);
    });

    it('Test uses Sun as the dayName', function () {
        assert.equal(isWeekday('Sun'), false);
    });

    it('Test uses Friday as the dayName', function () {
        assert.equal(isWeekday('Friday'), true);
    });

});