noseX = 0;
noseY = 0;

difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550, 550);

    canvas=createCanvas(550, 550);
    canvas.position(560, 120);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    background('#b37ceb');

    document.getElementById("square_side").innerHTML="Width and Height of a font will be = "+difference+"px";
    fill("#056e2d");
    stroke("#056e2d");
    textSize(difference);
    text('Ashkan', noseX, noseY);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+ noseX+", noseY = "+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX+", rightWristX = "+ rightWristX+", difference = "+difference);
        
        
    }

}
