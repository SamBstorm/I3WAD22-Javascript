const pickers = document.querySelectorAll(".picker");
const html_currentColor = document.querySelector(".currentColor");
let currentColor;

const chooseColor = function(colorClass){
    html_currentColor.classList = "currentColor";
    currentColor = colorClass;
    html_currentColor.classList.add(colorClass);
}

const colorize = function(elem){
    elem.classList = "colorMe";
    elem.classList.add(currentColor);
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

