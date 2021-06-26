var slider = document.getElementById("fvgs");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;

}

function calculate() {
    var a = parseInt(document.getElementById("fvp").value);
    var b = parseFloat(document.getElementById("fidss").value);
    var c = parseFloat(document.getElementById("fvgs").value);
    var d = b * (1 - (c / a)) * (1 - (c / a));
    document.getElementById("t1").value = d;
}

var list1 = [];
var list2 = [];
var n = 1;
var x = 0;

function addRow() {
    var addRown = document.getElementById('obsTable');
    var newRow = addRown.insertRow(n);
    list1[x] = document.getElementById("fvgs").value;
    list2[x] = document.getElementById("t1").value;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    n++;
    x++;
}

window.onload = function() {
    var dps = []; //dataPoints. 

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Accepting DataPoints from User Input"
        },
        axisX: {
            minimum: -5,
            maximum: 0
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    function addDataPointsAndRender() {
        xValue = Number(document.getElementById("fvgs").value);
        yValue = Number(document.getElementById("t1").value);
        dps.push({
            x: xValue,
            y: yValue
        });
        chart.render();
    }

    var renderButton = document.getElementById("renderButton");
    renderButton.addEventListener("click", addDataPointsAndRender);
}