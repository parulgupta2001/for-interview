var input = document.querySelectorAll(".input");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var output = document.querySelector("#output");





function addition (){
    var add = Number(input[0].value) + Number(input[1].value) ;
    output.innerText = add;
}

function subtraction (){
    var subtract = Number(input[0].value) - Number(input[1].value) ;
    output.innerText = subtract;
}

function multiplication (){
    var multiply = Number(input[0].value) * Number(input[1].value) ;
    output.innerText = multiply;
}

function division (){
    var divide = Number(input[0].value) / Number(input[1].value) ;
    output.innerText = divide;
}



button1.addEventListener("click" , addition);
button2.addEventListener("click" , subtraction);
button3.addEventListener("click" , multiplication);
button4.addEventListener("click" , division);