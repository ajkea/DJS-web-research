var color = ["#247ba0","#e94f37","#e393e41","#44bba4"];
var scholen = [190,150,110,60,30];
var pieChartData = [{label: 'Chiro', count: 43},{label: 'Scouts', count: 37},{label: 'KSA KLJ', count: 20}];
var legende = "";
var id, idAantal;

// create text


// Create yScale
var yScale = d3.scaleLinear()
               .domain([0, 200])
               .range([0, 200]);


// functions
window.onload = function changeText(){
    var color = ["#247ba0","#e94f37","#e393e41","#44bba4"];
    for (i = 0; i < scholen.length; i++) { 
        legende += "<li style='color:" + color[i] + ";'>" + scholen[i] + "</li>";
        console.log(color[i]);
    }
    idAantal = document.getElementsByClassName("legende").length;
    for (i = 0; i<idAantal; i++){
        id = "legende" + i;
        document.getElementById(id).innerHTML = legende;
    }
}

//rectangle chart
d3.select("#rectangleChart")
  .selectAll("rect")
  .data(scholen)
  .enter()
  .append("rect")
    .attr("width", 25)
    .attr("height", function(d) { return yScale(d);})
    .attr("x", function(d, i) { return i * 30; })
    .attr("y",function(d) { return 200 - yScale(d);})
    .style("fill",function(d,i){return color[i]});
    

//circle chart
d3.select("#circleChart")
    .selectAll("circle")
    .data(scholen)
    .enter()
    .append("circle")
        .attr("cx","50%")
        .attr("cy",function(d){return yScale(180-d/2.5)})
        .attr("r",function(d){return yScale(d/2)})
        .style("fill",function(d,i){return color[i]});

//donut chart
        var width = 200;
        var height = 200;
        var radius = Math.min(width, height) / 2;

        var color = d3.scaleOrdinal(d3.schemeCategory20b);

        var svg = d3.select('#pieChart')
          .append('svg')
          .append('g')
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

        var arc = d3.arc()
          .innerRadius(radius -50)
          .outerRadius(radius);

        var pie = d3.pie()
          .value(function(d) { return d.count; })
          .sort(null);

        var path = svg.selectAll('path')
          .data(pie(pieChartData))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d) {
            return color(d.data.label);
          });


          // chart 100%

          var svg = dimple.newSvg("#chartContainer", 590, 400);
          d3.tsv("/data/example_data.tsv", function (data) {
            data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"])
            var myChart = new dimple.chart(svg, data);
            myChart.setBounds(65, 30, 505, 305);
            var x = myChart.addCategoryAxis("x", "Month");
            x.addOrderRule("Date");
            myChart.addPctAxis("y", "Unit Sales");
            myChart.addSeries("Channel", dimple.plot.area);
            myChart.addLegend(60, 10, 500, 20, "right");
            myChart.draw();
          });

          