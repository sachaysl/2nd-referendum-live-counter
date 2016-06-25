
var secondRefData;
var number;

function preload() {
    secondRefData = loadJSON("https://petition.parliament.uk/petitions/131215.json");
}

function setup() {
    createCanvas(480, 120);
    console.log(secondRefData.data.attributes.signature_count);
    frameRate(0.1);
}

function draw() {
    var number = loadJSON("https://petition.parliament.uk/petitions/131215.json", totalSignatures);    
}

function totalSignatures(secondRefData) {
    number = secondRefData.data.attributes.signature_count;
    d3.select("#signatures").text("Total Votes for second EU referendum : " +  number);
}


