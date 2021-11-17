var del_table;
$(document).ready(function () {
  del_table = $("#account-manage").DataTable({
    scrollX: true,
  });
  document.getElementById("delete-switch").onclick = function () {
    delete_mode();
  };
});

function delete_mode() {
  var toggleDel = document.getElementById("delete-switch");

  if (toggleDel.checked == true) {
    document.getElementById("delete-btn").hidden = false;
    $("#account-manage tbody").on("click", "tr", function () {
      $(this).toggleClass("selected");
    });
  } else {
    document.getElementById("delete-btn").hidden = true;

    del_table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
    $("#account-manage tbody").off("click");
  }
}

function delete_account() {
  return true;
  var anSelected = del_table.$("tr.selected");
  $(anSelected).remove();
}

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
  "date-eu-pre": function (date) {
    date = date.replace(" ", "");
    if (!date) {
      return 0;
    }
    var year;
    var eu_date = date.split(/[\.\-\/]/);
    /*year (optional)*/
    if (eu_date[2]) {
      year = eu_date[2];
    } else {
      year = 0;
    }
    /*month*/
    var month = eu_date[1];
    if (month.length == 1) {
      month = 0 + month;
    }
    /*day*/
    var day = eu_date[0];
    if (day.length == 1) {
      day = 0 + day;
    }
    return (year + month + day) * 1;
  },
  "date-eu-asc": function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  },
  "date-eu-desc": function (a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  },
});
