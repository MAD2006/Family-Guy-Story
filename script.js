/* Declare variables below to save the different sections (divs) of your story*/

let option1button = document.querySelector(".option-one");

let option1screen = document.querySelector(".option-one-screen");
let option1end = document.querySelector(".option-one-end");
let option2button = document.querySelector(".option-two");
let option2end=document.querySelector(".option-two-end");
let option2screen = document.querySelector(".option-two-screen");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
option1button.onclick = function() {
    option1screen.style.display = "block";
    option1end.style.display = "block";
};

option2button.onclick = function() {
    option2screen.style.display = "block";
     option2end.style.display = "block";
};

/*
INSERT_VARIABLE.onclick=function(){

};

*/