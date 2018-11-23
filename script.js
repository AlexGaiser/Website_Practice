// script for practice webpage
function funct1(){
    var myStringArray = ["omaha","", "romeo", "juliet"]
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++){
        alert(myStringArray[i])
    }
}

function funct2(){
    var a = document.getElementById("1").value;
    var b = document.getElementById("2").value;
    alert(a);
    alert(b);
}
function funct3(){
    var num = Math.round(Math.random()*100);
    alert("random number generated: " + num)
}