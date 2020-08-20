// Table Function
function addRow() {
  var carYears = document.getElementById("car-years");
  var carMakes = document.getElementById("car-makes");
  var carModels = document.getElementById("car-models");
  var carTrims = document.getElementById("car-model-trims");
  var table = document.getElementById("car-table");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML =
    '<input type="hidden" name="car-years[]" value="' +
    carYears.value +
    '"></input>' +
    carYears.value;
  row.insertCell(1).innerHTML =
    '<input type="hidden" name="car-makes[]" value="' +
    carMakes.value +
    '"></input>' +
    carMakes.value;
  row.insertCell(2).innerHTML =
    '<input type="hidden" name="car-models[]" value="' +
    carModels.value +
    '"></input>' +
    carModels.value;

  row.insertCell(3).innerHTML =
    '<input type="hidden" name="car-model-trims[]" value="' +
    carTrims.value +
    '"></input>' +
    carTrims.value;

  row.insertCell(4).innerHTML =
    '<input type="button" value="Delete" onclick="Javascript:deleteRow(this)">';

  $("#car-table").show();
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("car-table");
  table.deleteRow(index);

  if ($("#car-table tr").length == 1) {
    $("#car-table").hide();
  }
}
