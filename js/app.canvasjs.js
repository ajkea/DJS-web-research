window.onload = function() {
    var chart = new CanvasJS.Chart("lineChartContainer", {
        title: {
            text: "Aanwezigheidspercentage per x*aantal leerlingen"
        },
        axisX: {
            interval: 10
        },
        data: [{
            type: "line",
            dataPoints: [
              { x: 10, y: 45 },
              { x: 20, y: 14 },
              { x: 30, y: 20 },
              { x: 40, y: 60 },
              { x: 50, y: 50 },
              { x: 60, y: 80 },
              { x: 70, y: 40 },
              { x: 80, y: 60 },
              { x: 90, y: 10 },
              { x: 100, y: 50 },
              { x: 110, y: 40 },
              { x: 120, y: 14 },
              { x: 130, y: 70 },
              { x: 140, y: 40 },
              { x: 150, y: 90 },
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("pieChartContainer",
	{
		title:{
			text: "Aantal leerlingen per jaar"
		},
		data: [
		{
			type: "pie",
			dataPoints: [
				{ y: 100},
				{ y: 200},
				{ y: 300},
				{ y: 400},
				{ y: 500},
				{ y: 600}
			]
		}
		]
	});
    chart.render();
}