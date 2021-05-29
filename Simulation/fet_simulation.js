var slider = document.getElementById("fids");
var slider1= document.getElementById("fvg");
var output = document.getElementById("demo");
var output1 = document.getElementById("dem");

output.innerHTML = slider.value;
output1.innerHTML = slider1.value;
slider.oninput = function() {
    output.innerHTML = this.value;

}
slider1.oninput = function() {
    output1.innerHTML = this.value;

}
    var vgs = parseFloat(document.getElementById("fids").value);
function calculate() {
    var a = parseInt(document.getElementById("fvp").value);
    var b = parseFloat(document.getElementById("fids").value);
    var c = parseFloat(document.getElementById("fvg").value);
	var d=0;
    if(b==-2)
	{ 
	   if (c==1)
	    d=0.26;
	   if(c==2)
	   		d=0.27;
		if(c==3)
		     d=0.30;
		if(c==4 )
		      d=0.31;
		if(c==5)
	   		d=0.31;
		if(c==6)
		     d=0.32;
		if(c==7)
		      d=0.32;
		if(c>=8)
		      d=0.33;
	}
	 else if(b==-1)
	{ 
	   if (c==1)
	    d=0.75;
	   if(c==2)
	   	d=0.99;
	   if(c==3)
	    d=1.03;
	   if(c==4 )
		d=1.05;
	   if(c==5)
	   	d=1.06;
	   if(c==6)
		d=1.07;
	   if(c==7)
		d=1.08;
	   if(c==8)
		d=1.08;
	   if(c==9)
		d=1.09;
	   if(c==10)
		d=1.09;
	}
	 else if(b==-1)
	{ 
	   if (c==1)
	    d=0.91;
	   if(c==2)
	   	d=1.55;
	   if(c==3)
	    d=1.80;
	   if(c==4 )
		d=1.84;
	   if(c==5)
	   	d=1.86;
	   if(c==6)
		d=1.87;
	   if(c==7)
		d=1.88;
	   if(c==8)
		d=1.89;
	   if(c==9)
		d=1.90;
	   if(c==10)
		d=1.90;
	}

    document.getElementById("t1").value = d;
}

var list1 = [];
var list2 = [];
var n = 1;
var x = 0;

function addRow() {
    var addRown = document.getElementById('obsTable');
    var newRow = addRown.insertRow(n);
    list1[x] = document.getElementById("fvg").value;
    list2[x] = document.getElementById("t1").value;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    n++;
    x++;
}

function refresh() {
	location.reload();
}
window.onload = function() {
    var dps = []; 
	dps.push({x:0, y:0})
      if (vgs == -2)
	   {
			dps.push({x: 1, y: 0.26});
	   }
	  else if ( vgs == -1)
	   {
		dps.push({ x: 1, y: 0.75});  
	   }
	  else
	   {
		dps.push({x: 1, y: 0.91});   
	   }

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Accepting DataPoints from User Input"
        },
        axisX: {
            minimum: 0,
            maximum: 10
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    function addDataPointsAndRender() {
        xValue = Number(document.getElementById("fvg").value);
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