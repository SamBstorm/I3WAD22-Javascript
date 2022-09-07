const result_while = document.querySelector('p#result_while');
const result_dowhile = document.querySelector('p#result_dowhile');
const html_init = document.getElementById('init');
const html_limit = document.getElementById('limit');

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
}
