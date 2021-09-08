module.exports = function findItemsOver20(list) {
  var itemOver20 = [];
  for (var i = 0; i < list.length; i++) {
    var listItem = list[i];
    if (listItem.qty > 20) {
      itemOver20.push(listItem);
    };
  };
  return itemOver20;
}
