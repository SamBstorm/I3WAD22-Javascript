const html_nb1 = document.querySelector("#nb1");
const html_nb2 = document.querySelector("#nb2");
const html_result = document.querySelector("#result");
const html_button = document.querySelector("button");

const demoFunction = function(nb1, nb2){
    return nb1 + nb2;
}

html_button.onclick = function (){
    html_result.innerText = demoFunction(parseInt(html_nb1.value),parseInt(html_nb2.value));
};


