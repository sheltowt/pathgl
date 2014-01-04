examples.point_lighting = function (selector) {
  var data = d3.range(1e4).map(function() {
               return { xloc: 0, yloc: 0, xvel: 0, yvel: 0 }
             })

  var width = size.width
      height = size.height

  var x = d3.scale.linear()
          .domain([-5, 5])
          .range([0, width])

  var y = d3.scale.linear()
          .domain([-5, 5])
          .range([0, height])

  var svg = d3.select(selector)
            .attr('height', height).attr('width', width)
            .call(pathgl)

  circle = svg.selectAll("circle")
               .data(data)
               .enter().append("circle")
           .attr('fill', function () { return "hsl(" + Math.random() * 360 + ",100%, 50%)" })
               .attr("cx", 10)
               .attr("cy", 10)
               .attr("r", 50)


  d3.timer(function() {
    data.forEach(function(d) {
      d.xloc += d.xvel
      d.yloc += d.yvel
      d.xvel += 0.04 * (Math.random() - .5) - 0.05 * d.xvel - 0.0005 * d.xloc
      d.yvel += 0.04 * (Math.random() - .5) - 0.05 * d.yvel - 0.0005 * d.yloc
    })

    circle
    .attr("cx", function(d) { return x(d.xloc) })
    .attr("cy", function(d) { return y(d.yloc) })
    .attr("r", function(d) { return Math.min(2 + 1000 * Math.abs(d.xvel * d.yvel), 10) })
    //.attr("fill", function (d) { return d.xvel > -0 ? 'red' : 'steelblue' })
  })

  d3.select('.blurb').text("Compare with http://bl.ocks.org/mbostock/raw/2647924/")
  c.selectAll('circle')
}