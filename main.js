var music_01 = "music.mp3";
var music_02 = "music2.mp3";

function preload() {
    music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(650,505);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0,0,650,505);
}


function playsong() {
    music.play();
}