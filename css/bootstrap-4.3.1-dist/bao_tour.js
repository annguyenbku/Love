var tour_table;
$(document).ready(function() {
    tour_table = $('#tour_regis_table').DataTable({
        columnDefs: [{ type: 'date-eu', 'targets': [4] }],
        "scrollX": true,
        // order: [
        //     [4, 'desc']
        // ],
    });
    del_table = $('#account-manage').DataTable();
    // document.getElementById('delete-switch').onclick = function() { delete_mode(); };
    $('#tour_regis_table').on('page.dt', function() {

        console.log("activated");
        color_status();
    });
    color_status();
});


function color_status() {
    var table = document.getElementById("tour_regis_table");
    if (table) {
        var tr = table.getElementsByTagName("tr");
        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[7];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.localeCompare('Hoàn Thành') == 0) {
                    td.className += " table-success ";
                } else {
                    td.className += " table-danger ";
                }
            }
        }
    }
}

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "date-eu-pre": function(date) {
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
    "date-eu-asc": function(a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    "date-eu-desc": function(a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});



// // Load google charts
// google.charts.load('current', {
//     'packages': ['corechart']
// });
// google.charts.setOnLoadCallback(drawChart);

// // Draw the chart and set the chart values
// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//         ['Tour', 'Số Lượng Đặt'],
//         ['Cung đường Tây Nguyên', 1000],
//         ['Cung đường Đông Nam Bộ', 500],
//         ['Cung đường Bắc Trung Bộ', 400],

//     ]);

//     // Optional; add a title and set the width and height of the chart
//     var options = {
//         'title': 'Số Lượng Đặt Tháng Này',
//         'width': 550,
//         'height': 300,
//         backgroundColor: '#f2f2f2',
//     };

//     // Display the chart inside the <div> element with id="piechart"
//     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//     chart.draw(data, options);
// }