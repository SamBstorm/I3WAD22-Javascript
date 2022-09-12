// let tab = ["Sara","Alessandra","Coline","Menen","Mariam","Maya","Miryam","Paula","Kasia","Nastia","Camille","Bao","Annissa","Éléonore"];
// console.table(tab);
// let tab_exemple1 = tab.splice(2,3); //Coline, Menen et Mariam seront supprimées;
// console.table(tab);
// tab.splice(2,3,"Colin","Manan","Mario"); //Maya, Miryam et Paula seront remplacée par "Colin","Manan","Mario"
// console.table(tab);
// tab.splice(2,0,"Paul","Arthur"); //Paul et arthur seront ajouter sans supprimer de valeurs.
// console.table(tab);

// tab.sort();
// console.table(tab);

// tab = [42,1, 2 , 54 , 4 , -32, 3, 6, 125];
// tab.sort();
// console.table(tab);

// tab.sort((a,b)=>a-b);
// console.table(tab);

// tab.sort((a,b)=>b-a);
// console.table(tab);

// let WEB = ["Maya","Soumaya","Jennifer","Christel"];
// let WAD = ["Sara","Alessandra","Coline","Menen","Mariam","Maya","Miryam","Paula","Kasia","Nastia","Camille","Bao","Annissa","Éléonore"];
// let classes = WEB.concat(WAD);

// console.log(WEB);
// console.log(WAD);
// console.log(classes.reverse());

// let reste = classes.slice(5,8);

// console.log(classes);
// console.log(reste);

let WAD = ["Sara","Alessandra","Coline","Menen","Mariam","Maya","Miryam","Paula","Kasia","Nastia","Camille","Bao","Annissa","Éléonore"];
const html_ul = document.querySelector("ul");

for (let i = 0; i < WAD.length; i++) {
    const element = WAD[i];
    
    //html_ul.innerHTML += "<li>"+element+"</li>";

    let html_li = document.createElement('li');
    html_li.innerText=element;
    html_ul.append(html_li);
}