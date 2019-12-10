var music; // var of the song
var analyzer;

var posX; // var x of the pointLight
var posY; // var y of the pointLight

function preload() {

  music = loadSound("./assets/music.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  analyzer = new p5.Amplitude();
  analyzer.setInput(music);
}

function draw() {

  background("black");

  perspective();
  camera(mouseX - width / 2, mouseY, 500, 0, 0, 0, 1, 1, 0);

  ambientLight(10, 10, 10); // create an ambientLight
  var posX = mouseX - width / 2; // var x changes with mouseX
  var posY = mouseY - height / 2; // // var y changes with mouseY
  pointLight(0, 0, 255, posX, posY, 100); // create a pointLight
  pointLight(255, 20, 147, posX, posY, -100); // create a pointLight

  // first box
  push();
  noStroke();
  ambientMaterial(255, 255, 255);
  translate(-500, 0, -200);
  rotateX(frameCount * 0.5);
  rotateY(45);
  rotateZ(frameCount * 0.5);
  box(50, mouseY, 50);
  pop();

  // second box
  push();
  noStroke();
  ambientMaterial(255, 255, 255);
  translate(0, 0, 0);
  rotateX(frameCount * 0.5);
  rotateY(45);
  rotateZ(frameCount * 0.5);
  box(50, mouseY, 50);
  pop();

  // third box
  push();
  noStroke();
  ambientMaterial(255, 255, 255);
  translate(500, 0, 200);
  rotateX(frameCount * 0.5);
  rotateY(45);
  rotateZ(frameCount * 0.5);
  box(50, mouseY, 50);
  pop();

  // music starts
  var volume = 0;
  if (mouseX > -1000) {
    if (music.isPlaying() == false) {
      music.play();
    }
    // get the volume and remap it to a bigger value
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 0, height);
  } else {
    music.stop();
  }

  // first sphere
  push();
  noStroke();
  specularMaterial(255, 255, 255);
  translate(200, 300, 150);
  sphere(volume + 10, 24, 24);
  pop();

  // second sphere
  push();
  noStroke();
  specularMaterial(255, 255, 255);
  translate(-200, -300, -150);
  sphere(volume + 5, 24, 24);
  pop();

  // first cone
  push();
  noStroke();
  specularMaterial(255, 255, 255);
  translate(500, 0, 0);
  rotateX(frameCount);
  cone(volume + 5, volume + 10, 24, 24);
  pop();

  // second cone
  push();
  noStroke();
  specularMaterial(255, 255, 255);
  translate(-500, 0, 0);
  rotateX(frameCount);
  cone(volume + 10, volume + 20, 24, 24);
  pop();

}
