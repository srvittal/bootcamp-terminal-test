const findItemsOver20 = require("../findItemsOver20.js");
const assert = require('assert');

describe('Find items over 20 tests', function () {

    it("Test uses [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}] as the list", function () {
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27},], findItemsOver20([{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3},]));
    });

    it("Test uses [{name : 'apples', qty : 10},{name : 'pears', qty : 19},{name : 'bananas', qty : 17},{name : 'apples', qty : 3}] as the list", function () {
        assert.deepEqual([], findItemsOver20([{name : 'apples', qty : 10},{name : 'pears', qty : 19},{name : 'bananas', qty : 17},{name : 'apples', qty : 3},]));
    });

    it("Test uses [{name : 'orange', qty : 10},{name : 'kiwi', qty : 19},{name : 'watermelon', qty : 17},{name : 'berries', qty : 3}] as the list", function () {
        assert.deepEqual([], findItemsOver20([{name : 'orange', qty : 10},{name : 'kiwi', qty : 19},{name : 'watermelon', qty : 17},{name : 'berries', qty : 3},]));
    });

    it("Test uses [{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3}] as the list", function () {
        assert.deepEqual([{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},], findItemsOver20([{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3},]));
    });

    it("Test uses [{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3},[{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}] as the list", function () {
        assert.deepEqual([{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver20([{name : 'orange', qty : 10},{name : 'kiwi', qty : 37},{name : 'watermelon', qty : 27},{name : 'berries', qty : 3},{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}]));
    });
    
});