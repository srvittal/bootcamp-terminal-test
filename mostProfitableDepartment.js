module.exports = function mostProfitableDepartment(data) {
  const salesMap = {};
  for (var i = 0; i < data.length; i++) {
    const depSales = data[i];
    salesMap[depSales.department] = 0;
  };
  for (var i = 0; i < data.length; i++) {
    const depSales = data[i];
    var currentTotal = salesMap[depSales.department];
    currentTotal += depSales.sales;
    salesMap[depSales.department] = currentTotal;
  };
  var highestTotal = 0;
  var department = "";
  for (const sales in salesMap) {
    var departmentSales = salesMap[sales];
    if (highestTotal < departmentSales) {
      highestTotal = departmentSales
      department = sales;
    };
  };
  return department;
}
