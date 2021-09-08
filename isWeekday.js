module.exports = function isWeekday(dayName) {
    if (dayName.startsWith('Sat') || dayName.startsWith('Sun')) {
        return false;
    } else {
        return true;
    }
}