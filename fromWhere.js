module.exports = function fromWhere(numPlate) {

    if (numPlate.startsWith('CY')) {
        return 'Bellville';
    }
    else if (numPlate.startsWith('CJ')) {
        return 'Paarl';
    }
    else if (numPlate.startsWith('CA')) {
        return 'Cape Town';
    }
    else {
        return 'Some other place!';
    }

}