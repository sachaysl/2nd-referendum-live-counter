function youngVoters() {

    var svg = d3.select("#sketch").attr("width", 1200);

    for (var i=0; i< 32; i++) {
	svg.append('svg:image')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 60)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGreen.jpg");
    }
}