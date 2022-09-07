const demo_let = function(){

    console.warn("Démo LET");
    let i = 0;
    for (let i = 0; i < 10; i++) {
        console.log(`Dans le for : ${i}`);
    }
    console.log(`Hors du for : ${i}`);
}

const demo_var = function(){

    console.warn("Démo VAR");
    var i = 0;
    for (var i = 0; i < 10; i++) {
        console.log(`Dans le for : ${i}`);
    }
    console.log(`Hors du for : ${i}`);
}

demo_let()
demo_var();