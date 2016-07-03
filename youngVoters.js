function youngVoters() {

    var svg = d3.select("#sketch").attr("width", 1200).attr("height", 800).append('g');
    var votes = svg.append('g').attr('id', '#votes');

    svg.attr('transform', 'translate(60,0)');
    
    svg.append('text')
	.attr('x',100)
	.attr('y',0)
	.text('The Case For a Second EU Referendum')
	.style('font-size', '1.5rem')
	.style('font-family', 'Gill Sans');
	
    //add remain votes
    for (var i=0; i< 32; i++) {
	votes.append('svg:image')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 60)
	    .attr('width', 30)
	    .attr('height', 50)
	    .attr('xlink:href','resources/fullManGreen.jpg');
    }

    votes.append('svg:image')
	.attr('x', 85 + (32*25))
	.attr('y', 60)
	.attr('width', 32)
	.attr('height', 54)
	.attr('xlink:href', 'resources/halfManGreen.jpg');

    //add leave votes
    for (var i=0; i< 36; i++) {
	votes.append('svg:image')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 120)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGrey.jpg");
    }

    //add youngVotersWhoDidntVote
    //2.9m remain, 0.9m leave
    //four rows of 1m --> 5 men

    var youngVotersNoVote = svg.append('g').attr('id', '#youngVotersNoVote')

    for (var i=0; i<5; i++) {
	youngVotersNoVote.append('svg:image')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 420)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGreen.jpg");
    }

    for (var i=0; i<4; i++) {
	youngVotersNoVote.append('svg:image')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 480)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGreen.jpg");
    }

    youngVotersNoVote.append('svg:image')
	.attr('x', 85 + (4 * 25))
	.attr('y', 480)
	.attr('width', 32)
	.attr('height', 54)
	.attr("xlink:href","resources/halfManGreen.jpg");

    for (var i=0; i<4; i++) {
	youngVotersNoVote.append('svg:image')
	    .attr('x', 90 + (i * 25))
	    .attr('y', 540)
	    .attr('width', 32)
	    .attr('height', 54)
	    .attr("xlink:href","resources/fullManGrey.jpg");
    }

    youngVotersNoVote.append('svg:image')
	.attr('x', 85 + (4 * 25))
	.attr('y', 540)
	.attr('width', 32)
	.attr('height', 54)
	.attr("xlink:href","resources/halfManGrey.jpg");

    youngVotersNoVote.attr('transform', 'translate(0,-30)');
}
