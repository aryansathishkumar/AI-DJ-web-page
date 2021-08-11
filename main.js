song = "";
volume = 0;
speed = 0;

leftWristY = "";
rightWristY = "";
rightWristX = "";
leftWristX = "";
function preload()
{
    song = loadSound("music.mp3")
}

function setup()
{
    canvas = createCanvas(350,350);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, loaded);
    poseNet.on("pose", getpose);
}
function loaded()
{
    console.log(ml5.version + "is loaded");
}
function getpose(results)
{
    console.log(results);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
     
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
}
function draw()
{
    image(video, 0, 0, 350, 350);
    volume = 0.1;
    speed = 1;
    console.log("left wrist y = "+leftWristY);
    console.log("right wrist y = "+rightWristY);

    if(leftWristY <= 15 + 400)
    {
        song.setVolume(volume);
    }
    else if(leftWristY = 0)
    {
        song.setVolume(0);
    }
    else if(leftWristY <= 30 + 400)
    {
        volume = 0.2;
        song.setVolume(volume);
    }
    else if(leftWristY <= 45 + 400)
    {
        volume = 0.3;
        song.setVolume(volume);
    }
    else if(leftWristY <= 60 + 400)
    {
        volume = 0.4;
        song.setVolume(volume);
    }
    else if(leftWristY <= 75 + 400)
    {
        volume = 0.5;
        song.setVolume(volume);
    }
    else if(leftWristY <= 90 + 400)
    {
        volume = 0.6;
        song.setVolume(volume);
    }
    else if(leftWristY <= 105 + 400)
    {
        volume = 0.7;
        song.setVolume(volume);
    }
    else if(leftWristY <= 120 + 400)
    {
        volume = 0.8;
        song.setVolume(volume);
    }
    else if(leftWristY <= 135 + 400)
    {
        volume = 0.9;
        song.setVolume(volume);
    }
    else
    {
        volume = 1;
        song.setVolume(volume);
    }

    console.log("volume = " + volume);
    document.getElementById("volume").innerHTML = (volume*100)+"%";
    if(rightWristY <= 25 + 400)
    {
        song.rate(speed);
    }
    else if(rightWristY <= 15 + 400)
    {
        speed = 0.2;
        song.setVolume(volume);
    }
    else if(rightWristY <= 30 + 400)
    {
        speed = 0.4;
        song.rate(speed);
    }
    else if(rightWristY <= 45 + 400)
    {
        speed = 0.6;
        song.rate(speed);
    }
    else if(rightWristY <= 60 + 400)
    {
        speed =0.8;
        song.rate(speed);
    }
    else if(rightWristY <= 75 + 400)
    {
        speed = 1;
        song.rate(speed);
    }
    else if(rightWristY <= 90 + 400)
    {
        speed = 1.2;
        song.rate(speed);
    }
    else if(rightWristY <= 105 + 400)
    {
        speed = 1.4;
        song.rate(speed);
    }
    else if(rightWristY <= 120 + 400)
    {
        speed = 1.6;
        song.rate(speed);
    }
    else if(rightWristY <= 135 + 400)
    {
        speed = 1.8;
        song.rate(speed);
    }
    else
    {
        speed = 2;
        song.rate(speed);
    }
    console.log("speed = "+speed);
    document.getElementById("speed").innerHTML = (speed*100)+"%";
}
function sing()
{
    song.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline";

    song.setVolume(0.1);
    song.rate(1);
}
function stop_sing()
{
    song.stop();
    document.getElementById("stop").style.display = "none";
    document.getElementById("play").style.display = "inline";
}
