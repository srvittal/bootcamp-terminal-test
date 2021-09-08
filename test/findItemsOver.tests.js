const findItemsOver = require("../findItemsOver.js");
const assert = require('assert');

describe('Find items over tests', function () {

    it("Test uses [{name : 'apples', qty : 40},{name : 'pears', qty : 20},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}] as the list & 20 as the qty", function () {
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver([{name : 'apples', qty : 40},{name : 'pears', qty : 20},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], 20));
    });

    it("Test uses [{name : 'orange', qty : 10},{name : 'kiwi', qty : 19},{name : 'watermelon', qty : 17},{name : 'berries', qty : 3}] as the list & 15 as the qty", function () {
        assert.deepEqual([{name : 'kiwi', qty : 19},{name : 'watermelon', qty : 17}], findItemsOver([{name : 'orange', qty : 10},{name : 'kiwi', qty : 19},{name : 'watermelon', qty : 17},{name : 'berries', qty : 3}],15));
    });

    it("Test uses [{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3}] as the list", function () {
        assert.deepEqual([{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},], findItemsOver([{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3}], 20));
    });

    it("Test uses [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3},] as the list & 20 as the qty", function () {
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27},], findItemsOver([{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3},], 20));
    });

    it("Test uses [{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3},[{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}] as the list  & 20 as the qty", function () {
        assert.equal(4, findItemsOver([{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3},{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}],10).length);
    });
    
});