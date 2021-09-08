module.exports = function allFromTown(numPlate, provCode) {
  var arrNumplates = numPlate.trim().split(/,\s*/);
  console.log(arrNumplates);
  var townPlates = [];
  for (var i = 0; i < arrNumplates.length; i++) {
    if (arrNumplates[i].startsWith(provCode)) {
      townPlates.push(arrNumplates[i]);
    };
  };
  return townPlates;
}