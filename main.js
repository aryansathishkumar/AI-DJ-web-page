sound = "";
function preload()
{
    sound = loadSound("music.mp3")
}

function setup()
{
    canvas = createCanvas(350,350);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 350, 350);
}
function sing()
{
    sound.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline";
}
function stop_sing()
{
    sound.stop();
    document.getElementById("stop").style.display = "none";
    document.getElementById("play").style.display = "inline";
}
