noseX=0;
noseY=0;
difference=0;
    rightWristX=0;
    leftWristX=0;
function setup()
{
   video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){
    background('#696969');
    document.getElementById("squareside").innerHTML="width and height of the square will be="+difference+"px";
    fill('#DC143C');
    stroke('#FFA500');
    square(noseX,noseY,difference);

}



function modelLoaded(){
    console.log('posenet is inizialized')
}
function gotPoses(results){
    if(results.length>0)
    console.log(results);
    noseX=results[0].pose.nose.x; 
    noseY=results[0].pose.nose.y;  
    console.log("noseX="+ noseX +"noseY="+ noseY) 
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);


}