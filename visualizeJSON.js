
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
    frameRate(0.1);
}

function draw() {
    var latestNumber = loadJSON("https://petition.parliament.uk/petitions/131215.json", totalSignatures);    
}

function totalSignatures(secondRefData) {
    latestNumber = secondRefData.data.attributes.signature_count;
    sig_counts.push(latestNumber);
    //change hack below later
    if (sig_counts.length > 2000000) {
	sig_counts.length = 0;
    }
    length = sig_counts.length;
    console.log(sig_counts);
    sigs_per_min = (sig_counts[length - 1] - sig_counts[length -2]) * 6;
    sigs_per_hour = d3.format(',') (sigs_per_min * 60);
    console.log(sigs_per_min);
    console.log(sigs_per_hour);
    
	
    d3.select("#signaturesNumber").text(d3.format(',')(latestNumber));
    d3.select("#signaturesPerMinNumber").text(sigs_per_min);
    d3.select("#signaturesPerHourNumber").text(sigs_per_hour);
    
}


