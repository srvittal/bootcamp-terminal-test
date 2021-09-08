const totalPhoneBill = require("../totalPhoneBill.js");
const assert = require('assert');

describe('Total phone bill tests', function () {

    it('Test uses call,sms,call,call as the usage', function () {
        assert.equal("R8.90", totalPhoneBill("call,sms,call,call"));
    });

    it('Test uses c,s,c,c,c,s,s,s,c as the usage', function () {
        assert.equal("R16.35", totalPhoneBill("c,s,c,c,c,s,s,s,c"));
    });

    it('Test uses call,sms,call,call,call,sms,sms,sms,call,sms as the usage', function () {
        assert.equal("R17.00", totalPhoneBill("call,sms,call,call,call,sms,sms,sms,call,sms"));
    });

    it('Test uses call,call,call,call,call as the usage', function () {
        assert.equal("R13.75", totalPhoneBill("call,call,call,call,call"));
    });

    it('Test uses sms,sms,sms,sms,sms as the usage', function () {
        assert.equal("R3.25", totalPhoneBill("sms,sms,sms,sms,sms"));
    });

});