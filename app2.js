$.uncheck = function () {
  $("input[type=checkbox]").prop("checked", false);
};

$.togglePrice = function () {
  if ($("input[type=checkbox]").prop("checked")) {
    $("#basic-price").text("$19.99");
    $("#pro-price").text("$24.99");
    $("#master-price").text("$39.99");
  } else {
    $("#basic-price").text("$199.99");
    $("#pro-price").text("$249.99");
    $("#master-price").text("$399.99");
  }
};

$(document).ready($.uncheck);
$("input[type=checkbox]").change($.togglePrice);
