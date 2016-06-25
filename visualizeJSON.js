
var secondRefData;
var latestNumber;
var sig_counts;
var length;

function preload() {
    secondRefData = loadJSON("https://petition.parliament.uk/petitions/131215.json");
}

function setup() {
    createCanvas(480, 120);
    sig_counts = [];
    latestNumber = secondRefData.data.attributes.signature_count;
    sig_counts.push(latestNumber);
    console.log(latestNumber);

    d3.select("#signaturesNumber").text(d3.format(',')(latestNumber));
    d3.select("#signaturesPerMinNumber").text("calculating...");
    d3.select("#signaturesPerHourNumber").text("calculating...");
    console.log(sig_counts);
    animateValue("signaturesNumber", latestNumber , latestNumber + 300, 10000);
    frameRate(0.1);
}

function draw() {
    var latestNumber = loadJSON("https://petition.parliament.uk/petitions/131215.json", totalSignatures);    
}

function totalSignatures(secondRefData) {
    latestNumber = secondRefData.data.attributes.signature_count;
    sig_counts.push(+latestNumber);
    
    console.log(sig_counts.length);
    if (sig_counts.length > 2) {
	sig_counts.shift();
    }
    length = sig_counts.length;
    console.log(sig_counts);
    sigs_per_min = (sig_counts[length - 1] - sig_counts[length -2]) * 6;
    sigs_per_hour = d3.format(',') (sigs_per_min * 60);
    console.log(sigs_per_min);
    console.log(sigs_per_hour);

    animateValue("signaturesNumber", sig_counts[length-2] , sig_counts[length-1], 10000);
    //d3.select("#signaturesNumber").text(d3.format(',')(latestNumber));
    d3.select("#signaturesPerMinNumber").text(sigs_per_min);
    d3.select("#signaturesPerHourNumber").text(sigs_per_hour);    
}

function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    if (range == 0) {
	obj.innerHTML = start;
    }
    else {
	
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
	current += increment;
	obj.innerHTML = d3.format(',')(current);
	if (current == end) {
	    clearInterval(timer);
	}
    }, stepTime);
    }
}





