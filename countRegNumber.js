module.exports = function countRegNumber(regString) {
	var countNum = regString.split(',');
	return countNum.length;
};
