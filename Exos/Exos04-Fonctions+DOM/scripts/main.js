const html_show = document.getElementById("show");
const html_calcul = document.getElementById("calcul");
html_show.value = 0;
let decimalPressed = false;
let firstNumber = true;
let number1;
let operator;

const pressNumber = function (nb) {
    if(firstNumber){
        html_show.value = 0;
        firstNumber = false;
    }
    if (nb == 0 && html_show.value === "0") nb = "";
    if (nb != 0 && nb != '.' && html_show.value === "0") html_show.value = "";
    html_show.value += nb;
}

const pressDecimal = function () {
    if (!decimalPressed) {
        pressNumber(".");
        decimalPressed = true;
    }
    else console.warn(`Decimal was already pressed...`)
}

const pressOperator = function (ope) {
    let temp = parseFloat(html_show.value);
    if(number1 || number1 == 0) pressEqual();
    number1 = parseFloat(html_show.value);
    // console.log(`number1 : ${number1}`);
    operator = ope;
    // console.log(`operator : ${operator}`);
    html_calcul.value +=`${temp}\n${operator} `
    decimalPressed = false;
    html_show.value = number1;
    firstNumber = true;
}

const pressEqual = function () {
    if (!number1 && number1 != 0) throw new Error("Pas encore de valeur...");
    if (!operator) throw new Error("Pas encore d'opérateur...");
    let number2 = parseFloat(html_show.value);
    console.log(`number2 : ${number2}`);
    switch (operator) {
        case '+':
            html_show.value = number1 + number2;
            break;
        case '-':
            html_show.value = number1 - number2;
            break;
        case '*':
            html_show.value = number1 * number2;
            break;
        case '/':
            html_show.value = number1 / number2;
            break;
    }
    firstNumber = true;
    decimalPressed = false;
    number1 = undefined;
    operator = undefined;
}