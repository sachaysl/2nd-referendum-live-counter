
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
    console.log(sig_counts);
    d3.select("#signatures").text("Total Signatures For Second EU Referendum : " +  latestNumber);
    frameRate(0.1);
}

function draw() {
    var latestNumber = loadJSON("https://petition.parliament.uk/petitions/131215.json", totalSignatures);    
}

function totalSignatures(secondRefData) {
    latestNumber = secondRefData.data.attributes.signature_count;
    sig_counts.push(latestNumber);
    length = sig_counts.length;
    console.log(sig_counts);
    sigs_per_min = (sig_counts[length - 1] - sig_counts[length -2]) * 6;
	
    d3.select("#signatures").text("Total Signatures For Second EU Referendum : " +  latestNumber);
    d3.select("#signaturesPerMin").text("Signatures Per Minute : " + sigs_per_min );
}


