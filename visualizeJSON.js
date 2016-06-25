
var secondRefData;

function preload() {
    secondRefData = loadJSON("https://petition.parliament.uk/petitions/131215.json");
}

function setup() {
    createCanvas(480, 120);
    console.log(secondRefData.data.attributes.signature_count);
}

function draw() {
}

