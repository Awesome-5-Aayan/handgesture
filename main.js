var prediction1=""
var prediction2=""
Webcam.set({
    width:350, height: 300, image_format: 'png', png_quality: 90, 
});

Camera= document.getElementById("Camera");
Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function (Data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+Data_uri+'"/>'
    } );
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Mv6sVsUx2/model.json',modelLoaded);
function modelLoaded() {
    console.log('model loaded');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction1;
    speak_data_2="the second prediction is "+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}