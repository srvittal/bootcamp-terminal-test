module.exports = function transportFee(shift) {
    if (shift == 'morning'|| shift.startsWith('morn')) {
        return 'R20';
    } else if (shift == 'afternoon'|| shift.endsWith('noon')) {
        return 'R10';
    } else {
        return 'free';
    }
}