const result_while = document.querySelector('p#result_while');
const result_dowhile = document.querySelector('p#result_dowhile');
const result_for = document.querySelector('p#result_for');
const html_init = document.getElementById('init');
const html_limit = document.getElementById('limit');

const for_demo = function(){
    result_for.innerHTML="";
    // let i; si déclaré dans la boucle, pas besoin de déclaré ici, sauf si besoin de sortir la valeur de la boucle
    for (let i = parseInt(html_init.value); i < parseInt(html_limit.value); i++) {
        result_for.innerHTML += `${i}<br>`
    }
    result_for.innerHTML += `et enfin ${i}...`;
}

const while_demo = function(){
    result_while.innerHTML="";
    let i = parseInt(html_init.value);
    
    while (i < parseInt(html_limit.value)){
        result_while.innerHTML += `${i}<br>`;
        i++;
    }
    result_while.innerHTML += `et enfin ${i}...`;
}

const dowhile_demo = function(){
    result_dowhile.innerHTML="";
    let i = parseInt(html_init.value);

    do{
        result_dowhile.innerHTML += `${i}<br>`;
        i++;
    } while (i < parseInt(html_limit.value));
    result_dowhile.innerHTML += `et enfin ${i}...`;
}

const execute = function(){
    while_demo();
    dowhile_demo();
    for_demo();
}
