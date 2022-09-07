const pickers = document.querySelectorAll(".picker");
const html_currentColor = document.querySelector(".currentColor");
let currentColor;

const chooseColor = function(elem){
    currentColor = getComputedStyle(elem).backgroundColor;
    html_currentColor.style.backgroundColor = currentColor;
}

const colorize = function(elem){
    elem.style.backgroundColor = currentColor;
}

pickers[0].classList.add("white");
pickers[1].classList.add("black");
pickers[2].classList.add("red");
pickers[3].classList.add("green");
pickers[4].classList.add("blue");
pickers[5].classList.add("yellow");
pickers[6].classList.add("cyan");
pickers[7].classList.add("magenta");
pickers[8].classList.add("grey");
pickers[9].classList.add("darkgrey");

