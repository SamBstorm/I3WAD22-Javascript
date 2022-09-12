const html_range_red = document.querySelector("#range_red");
const html_range_green = document.querySelector("#range_green");
const html_range_blue = document.querySelector("#range_blue");
const html_tr = document.querySelector("table tr");

const MIN_RANGE = 0;
const MAX_RANGE = 255;

html_range_red.min = MIN_RANGE;
html_range_red.max = MAX_RANGE;
html_range_green.min = MIN_RANGE;
html_range_green.max = MAX_RANGE;
html_range_blue.min = MIN_RANGE;
html_range_blue.max = MAX_RANGE;

const degrader = function(){
    html_tr.innerHTML="";
    let step_red = parseInt(html_range_red.value)/9;
    let step_green = parseInt(html_range_green.value)/9;
    let step_blue = parseInt(html_range_blue.value)/9;
    for (let i = 0; i < 10; i++) {
        html_tr.innerHTML += "<td><div></div></td>";
        let td = document.querySelector("table td:last-child");
        td.style.backgroundColor = generateColor(
                                        Math.round(step_red*i),
                                        Math.round(step_green*i),
                                        Math.round(step_blue*i)
                                    );
    }
}

const generateColor = function(red,green,blue){
    return `rgb(${red ?? html_range_red.value},${green ?? html_range_green.value},${blue ?? html_range_blue.value})`;
}