let eDiam = 50;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(200,200,200);
    fill("pink");

    
    for(let xpos = 0; xpos <= width; xpos+= eDiam) {
        for(let ypos = 0; ypos <= height; ypos+= eDiam) {
            ellipse(xpos, ypos, eDiam, eDiam);
    }
}
}