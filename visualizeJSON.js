
var secondRefData;

function preload() {
    secondRefData = loadJSON("https://petition.parliament.uk/petitions/131215.json");
}

function setup() {
    createCanvas(480, 120);
    console.log(secondRefData.data.attributes.signature_count);
    frameRate(0.1);

}

function draw() {
    loadJSON("https://petition.parliament.uk/petitions/131215.json", totalSignatures);
}

function totalSignatures(secondRefData) {
    console.log(secondRefData.data.attributes.signature_count);
}

