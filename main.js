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
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emotion1_name").innerHTML=results[0].label;
        document.getElementById("emotion2_name").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        if(results[0].label=="fist"){
            document.getElementById("emoji1").innerHTML="&#9994;";
        }

        if(results[0].label=="high 5"){
            document.getElementById("emoji1").innerHTML="&#9995;";
        }

        if(results[0].label=="snap"){
            document.getElementById("emoji1").innerHTML="&#128076;";
        }

        if(results[0].label=="thumps up"){
            document.getElementById("emoji1").innerHTML="&#128077;";
        }


        if(results[1].label=="fist"){
            document.getElementById("emoji2").innerHTML="&#9994;";
        }

        if(results[1].label=="high 5"){
            document.getElementById("emoji2").innerHTML="&#9995;";
        }

        if(results[1].label=="snap"){
            document.getElementById("emoji2").innerHTML="&#128076;";
        }

        if(results[1].label=="thumps up"){
            document.getElementById("emoji2").innerHTML="&#128077;";
        }
    }
}