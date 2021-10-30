img="";
status="";

function preload() {
    img=loadImage('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: deTecting objects";
}
//hELP pLZ
function modelLoaded() {
    console.log("DA MODAL IZ LOADEDD!!!!!!!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error();
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#ffd359");
    text("Cat", 320, 120);
    noFill();
    stroke("#ffd359");
    rect(300, 90, 270, 320);
}
