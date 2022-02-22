function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(100,250);
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";
}

function draw(){
    image(video,0,0,640,480);
    tint(tintcolor);
}

function apply_filter(){
    tintcolor = document.getElementById("color_name").value;
}

function take_snapshot(){
    save('pic.png');
}