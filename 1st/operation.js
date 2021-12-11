var input = document.querySelectorAll(".input");
var button1 = document.querySelector("#button1");
var output = document.querySelector("#output");





function clickEventHandler (){
    var add = Number(input[0].value) + Number(input[1].value) ;
    console.log("add");
}




button1.addEventListener("click" , clickEventHandler)