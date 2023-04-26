var status="";
var hola=[];
var babi_song="";



function preload() {
img=loadImage("dog_cat.jpg");
babi_song=loadSound("huevo.mp3");
}

function setup() {
    canvas=createCanvas(380,380);
video= createCapture(VIDEO);
video.size(380,380);
video.hide();
    canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelolisto );
 }

function modelolisto() {
console.log("model ready");
status=true;
}
function MYDEETARECOVERYSOFTWARE(error,resultados) {
    if (error) {
        console.log(error);
    } else {
        console.log(resultados);
        hola=resultados

    }
}
function draw() {
image(video,0,0,380,380)
if (status!="") {
objectDetector.detect(video,MYDEETARECOVERYSOFTWARE)
    for (var i= 0; i < hola.length; i++) {
 document.getElementById("status").innerHTML="status : detecting objects";
       fill("orangered");
porcentaje=floor(hola[i].confidence*100);
text(hola[i].label+porcentaje,hola[i].x,hola[i].y+20);
noFill();
stroke("orangered");
rect(hola[i].x,hola[i].y,hola[i].width,hola[i].height);
if (hola[i].label=="teddy bear") {
document.getElementById("nomer").innerHTML="babi  ";
babi_song.stop();
} else {
    document.getElementById("nomer").innerHTML="no babi  ";
babi_song.play();
}

 
    
    }
if (hola.length==0) {
     document.getElementById("nomer").innerHTML="no babi  ";
babi_song.play();
}
}




}0