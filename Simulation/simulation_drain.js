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
    var b = parseFloat(document.getElementById("fids").value);
    var c = parseFloat(document.getElementById("fvg").value);
	var d=0;
    if(b==-2)
	{ 
	   if (c==1)
	          d=2.0;
			 document.getElementById("t1").value = d;
	   if(c==2)
	   		  d=2.5;
			 document.getElementById("t1").value = d;
		if(c==3)
		      d=3.0;
			  document.getElementById("t1").value = d;
		if(c==4 )
		      d=3.4;
			   document.getElementById("t1").value = d;
		if(c==5)
	   		  d=3.8;
			 document.getElementById("t1").value = d;
		if(c==6)
		      d=4.4;
			  document.getElementById("t1").value = d;
		if(c==7)
		      d=4.4;
			   document.getElementById("t1").value = d;
		if(c>=8)
		      d=4.4;
			   document.getElementById("t1").value = d;
	}
	 else if(b== -1)
	{ 
	   if (c==1)
	        d=2.5;
			 document.getElementById("t1").value = d;
	   if(c==2)
	     	d=2.9;
			 document.getElementById("t1").value = d;
	   if(c==3)
	        d=3.2;
			 document.getElementById("t1").value = d;
	   if(c==4 )
		    d=3.5;
			 document.getElementById("t1").value = d;
	   if(c==5)
	     	d=4.0;
			 document.getElementById("t1").value = d;
	   if(c==6)
		    d=4.7;
			 document.getElementById("t1").value = d;
	   if(c==7)
		    d=5.4;
			 document.getElementById("t1").value = d;
	   if(c==8)
		    d=5.8;
			 document.getElementById("t1").value = d;
	   if(c==9)
		    d=6.0;
			 document.getElementById("t1").value = d;
	   if(c==10)
		    d=6.0;
			 document.getElementById("t1").value = d;
	}
	 else if(b== 0)
	{ 
	   if (c==1)
	        d=3.1;
			 document.getElementById("t1").value = d;
	   if(c==2)
	     	d=3.7;
			 document.getElementById("t1").value = d;
	   if(c==3)
	        d=4.8;
			 document.getElementById("t1").value = d;
	   if(c==4 )
		    d=5.4;
			 document.getElementById("t1").value = d;
	   if(c==5)
	     	d=6.6;
			 document.getElementById("t1").value = d;
	   if(c==6)
		    d=7.4;
			 document.getElementById("t1").value = d;
	   if(c==7)
		    d=8.4;
			 document.getElementById("t1").value = d;
	   if(c==8)
		    d=8.8;
			 document.getElementById("t1").value = d;
	   if(c==9)
		    d=9.0;
			 document.getElementById("t1").value = d;
	   if(c==10)
		    d=9.0;
			 document.getElementById("t1").value = d;
	}

    // document.getElementById("t1").value = d;
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
	  else if ( vgs == 0)
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