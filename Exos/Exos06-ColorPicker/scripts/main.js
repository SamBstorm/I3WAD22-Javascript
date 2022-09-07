const pickers = document.querySelectorAll(".picker");
const html_currentColor = document.querySelector(".currentColor");
let currentColor;

const chooseColor = function(elem){
    currentColor = elem.style.backgroundColor;
    html_currentColor.style.backgroundColor = currentColor;
}

const colorize = function(elem){
    elem.style.backgroundColor = currentColor;
}

pickers[0].style.backgroundColor = "#FFFFFF";
pickers[1].style.backgroundColor = "#000000";
pickers[2].style.backgroundColor = "#FF0000";
pickers[3].style.backgroundColor = "#00FF00";
pickers[4].style.backgroundColor = "#0000FF";
pickers[5].style.backgroundColor = "#FFFF00";
pickers[6].style.backgroundColor = "#00FFFF";
pickers[7].style.backgroundColor = "#FF00FF";
pickers[8].style.backgroundColor = "#AAAAAA";
pickers[9].style.backgroundColor = "#555555";

