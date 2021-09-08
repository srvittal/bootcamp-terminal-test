module.exports = function findItemsOver(list, qty) {
  var itemOver = [];
  for (var i = 0; i < list.length; i++) {
    var listItem = list[i];
    if (listItem.qty > qty) {
      itemOver.push(listItem);
    };
  };
  return itemOver;
}