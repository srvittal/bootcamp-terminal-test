module.exports = function regCheck(numPlate, provCode) {
  return numPlate.startsWith(provCode) || numPlate.endsWith(provCode);
};