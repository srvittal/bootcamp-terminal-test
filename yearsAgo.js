module.exports = function yearsAgo(num) {
    var date = new Date();
    var currentYear = date.getFullYear();
    return currentYear - num;
}