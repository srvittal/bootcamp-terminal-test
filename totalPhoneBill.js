module.exports = function totalPhoneBill(usage) {
  var arrUsage = usage.trim().split(/,\s*/);
  var callUsage = [];
  var smsUsage = [];
  for (var i = 0; i < arrUsage.length; i++) {
    if (arrUsage[i].startsWith('c')) {
      callUsage.push(arrUsage[i]);
    } else if (arrUsage[i].startsWith('s')) {
      smsUsage.push(arrUsage[i]);
    };
  };

  var callCost = callUsage.length * 2.75;
  var smsCost = smsUsage.length * 0.65;
  var totalCost = callCost + smsCost;
  var billAmt = 'R' + totalCost.toFixed(2).toString();

  return billAmt;
}