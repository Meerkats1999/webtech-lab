function fetchAngle(){
    var angle = document.getElementById("angle").value;
    typeAngle(angle);
}

function typeAngle(angle){
    if(angle == 90){
        alert("Right Angle");
    }
    else if(angle < 90){
        alert("Acute");
    }
    else if(angle > 90){
        alert("Obtuse");
    }
}