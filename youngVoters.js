function youngVoters() {

    var svg = d3.select("#sketch").attr("width", 1200).attr("height", 800).append('g');
    var votes = svg.append('g').attr('id', '#votes');

    svg.attr('transform', 'translate(0,-60)');
    
    svg.append('text')
	.attr('x',90)
	.attr('y',20)
	.text('Brexit Referendum Results')
	.style('font-size', '1.5rem')
	.style('font-family', 'Gill Sans');

    svg.append('text')
	.attr('x',40)
	.attr('y',70)
	.text('Remain')
	.style('font-size', '1rem')
	.style('font-family', 'Gill Sans');

    svg.append('text')
	.attr('x',45)
	.attr('y',130)
	.text('Leave')
	.style('font-size', '1rem')
	.style('font-family', 'Gill Sans');


    //static parts
	
    //add remain votes
    for (var i=0; i< 33; i++) {
	if (i < 32) {
	    votes.append('svg:image')
		.attr('id', 'remain' + i)
		.style('visibility', 'hidden')
		.attr('x', 90 + (i * 25))
		.attr('y', 60)
		.attr('width', 30)
		.attr('height', 50)
		.attr('xlink:href','resources/fullManGreen.jpg');
	}
	else {
	    votes.append('svg:image')
		.attr('id', 'remain' + 32)
		.style('visibility', 'hidden')
		.attr('x', 85 + (32*25))
		.attr('y', 60)
		.attr('width', 32)
		.attr('height', 50)
		.attr('xlink:href', 'resources/halfManGreen.jpg');
	}
	    d3.select("#remain" + i).transition().delay(1000 + i*100).duration(1000)
	    .style('visibility', 'inherit');
    }

    for (var i = 0; i<10; i++) {
	if (i < 9) {
	    votes.append('svg:image')
		.attr('id', 'remain' + (33 + i))
		.style('visibility', 'hidden')
		.attr('x', 90 + 32*25 + (i * 25))
		.attr('y', 60)
		.attr('width', 30)
		.attr('height', 50)
		.attr('xlink:href','resources/fullManGreen.jpg');
	}

	else {
	    votes.append('svg:image')
		.attr('id', 'remain' + (33+i))
		.style('visibility', 'hidden')
		.attr('x', 85 + (41*25))
		.attr('y', 57)
		.attr('width', 32)
		.attr('height', 54)
		.attr('xlink:href', 'resources/halfManGreen.jpg');
	}

	d3.select("#remain" + (33+i)).transition().delay(18000 + i*100).duration(1000)
	    .style('visibility', 'inherit');
	
    }

    //add leave votes
    for (var i=0; i< 36; i++) {
	votes.append('svg:image')
	    .attr('id', 'leave' + i)
	    .style('visibility', 'hidden')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 120)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGrey.jpg");

	d3.select("#leave" + i).transition().delay(1000 + i*100).duration(1000)
	    .style('visibility', 'inherit');

    }

    for (var i=0; i< 3; i++) {
	votes.append('svg:image')
	    .attr('id', 'leave' + (36+i))
	    .style('visibility', 'hidden')
	    .attr('x', 90 + (36*25) + (i * 25))
	    .attr('y', 120)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGrey.jpg");

	d3.select("#leave" + (36+i)).transition().delay(18000 + i*100).duration(1000)
	    .style('visibility', 'inherit');

    }


    //add youngVotersWhoDidntVote
    //2.9m remain, 0.9m leave
    //four rows of 1m --> 5 men

    var youngVotersNoVote = svg.append('g')
	.attr('id', 'youngVotersNoVote')
	.style('visibility', 'hidden')

    youngVotersNoVote.append('text')
	.attr('x',90)
	.attr('y',380)
	.text("18-24 Year Olds Who Didn't Vote")
	.style('font-size', '1.3rem')
	.style('font-family', 'Gill Sans');


    for (var i=0; i<5; i++) {
	youngVotersNoVote.append('svg:image')
	    .attr('id', 'firstRow'+ i)
	    .attr('class', "firstRow")
	    .attr('x', 90 + (i * 25))
	    .attr('y', 420)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGreen.jpg");
    }

    for (var i=0; i<5; i++) {
	youngVotersNoVote.append('svg:image')
	    .attr('id', 'secondRow'+ i)
	    .attr('class', "secondRow")
	    .attr('x', 90 + (i * 25))
	    .attr('y', 480)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGreen.jpg");
    }

    for (var i=0; i<4; i++) {
	youngVotersNoVote.append('svg:image')
	    .attr('id', 'thirdRow'+ i)
	    .attr('class', "thirdRow")
	    .attr('x', 90 + (i * 25))
	    .attr('y', 540)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGreen.jpg");
    }

    youngVotersNoVote.append('svg:image')
	.attr('id', 'thirdRowHalf')
	.attr("class", 'thirdRow')
	.attr('x', 85 + (4 * 25))
	.attr('y', 540)
	.attr('width', 32)
	.attr('height', 54)
	.attr("xlink:href","resources/halfManGreen.jpg");


    for (var i=0; i<4; i++) {
	if (i < 3) {
	    youngVotersNoVote.append('svg:image')
		.attr('id', 'fourthRow' + i)
		.attr('class', 'fourthRow')
		.attr('x', 90 + (i * 25))
		.attr('y', 600)
		.attr('width', 32)
		.attr('height', 54)
		.attr("xlink:href","resources/fullManGrey.jpg");
	}

	else {
	    youngVotersNoVote.append('svg:image')
		.attr('id', 'fourthRow' + i)
		.attr('x', 90 + (i * 25))
		.attr('y', 600)
		.attr('width', 32)
		.attr('height', 54)
		.attr("xlink:href","resources/fullManGrey.jpg");
	}
    }

    youngVotersNoVote.append('svg:image')
	.attr('id', 'fourthRowHalf')
	.attr('x', 85 + (4 * 25))
	.attr('y', 600)
	.attr('width', 32)
	.attr('height', 54)
	.attr("xlink:href","resources/halfManGrey.jpg");

    youngVotersNoVote.attr('transform', 'translate(0,-30)');


    svg.append('text')
	.attr('x',95)
	.attr('y',660)
	.text('1 green sign for 200,000 remain votes')
	.style('font-size', '1rem')
	.style('font-family', 'Gill Sans');

    svg.append('text')
	.attr('x',95)
	.attr('y',680)
	.text('1 grey sign for 200,000 leave votes')
	.style('font-size', '1rem')
	.style('font-family', 'Gill Sans');

    d3.select("#youngVotersNoVote").transition().delay(8000).duration(1000)
	.style("visibility", "inherit");

//    d3.selectAll(".thirdRow").transition().delay(15000).duration(1000)
//	.style("visibility", "hidden");

//    d3.select("#fourthRowHalf").transition().delay(15000).duration(1000)
//	.style("visibility", "hidden");
    
//    d3.select("#fourthRow3").transition().delay(15000).duration(1000)
//	.style("visibility", "hidden");

    d3.selectAll(".firstRow").transition().delay(18000).duration(1000)
	.style("visibility", "hidden");

    d3.selectAll(".secondRow").transition().delay(18500).duration(1000)
	.style("visibility", "hidden");

    d3.selectAll(".fourthRow").transition().delay(18000).duration(1000)
	.style("visibility", "hidden");


    
}
