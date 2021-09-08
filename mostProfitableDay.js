module.exports = function mostProfitableDay(data) {
    const dayMap = {};
    for (var i = 0; i < data.length; i++) {
      const depSales = data[i];
      dayMap[depSales.day] = 0;
    };
    for (var i = 0; i < data.length; i++) {
      const depSales = data[i];
      var currentTotal = dayMap[depSales.day];
      currentTotal += depSales.sales;
      dayMap[depSales.day] = currentTotal;
    };
    var highestTotal = 0;
    var Day = "";
    for (const day in dayMap) {
      var departmentSales = dayMap[day];
      if (highestTotal < departmentSales) {
        highestTotal = departmentSales
        Day = day;
      };
    };
    return Day;
  }
  