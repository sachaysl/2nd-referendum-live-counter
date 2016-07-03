function youngVoters() {

    var svg = d3.select("#sketch");

    svg.append('svg:image')
	.attr('x',90)
	.attr('y', 60)
	.attr('width', 32)
	.attr('height', 54)
	.attr("xlink:href","resources/fullManGreen.jpg");
}
