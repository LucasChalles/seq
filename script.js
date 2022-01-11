let box, drum, myPart;
let boxPat = [1,1,1,1,1,1,1,1];
let drumPat = [0,1,0,1,0,1,0,1];

function preload() {
  box =  mySound = loadSound = ('WM_kick_house_01.wav');
  drum =  mySound = loadSound = ('WM_snare_07.wav');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playMyPart);
  background(220);
  textAlign(CENTER, CENTER);
  text('tap to play', width/2, height/2);

  let boxPhrase = new p5.Phrase('WM_kick_house_01.wav', playBox, boxPat);
  let drumPhrase = new p5.Phrase('WM_snare_07.wav', playDrum, drumPat);
  myPart = new p5.Part();
  myPart.addPhrase(boxPhrase);
  myPart.addPhrase(drumPhrase);
  myPart.setBPM(30);
}

function playBox(time, playbackRate) {
  box.rate(playbackRate);
  box.play(time);
}

function playDrum(time, playbackRate) {
  drum.rate(playbackRate);
  drum.play(time);
}

function playMyPart() {
  userStartAudio();

  myPart.start();
}