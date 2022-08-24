//IF()... ELSE...
/*
let article_name = prompt("Veuillez indiquer le nom de l'article :");
if (article_name == null || article_name == "") {
    alert("Hey! Il faut un nom!");
}
else {
    let article_price = parseFloat(prompt(`Quel est le prix unitaire de "${article_name}" ?`));
    if (isNaN(article_price)) {
        alert("Hey! Pas de prix, c'est pas gratuit!");
    }
    else {
        let quantity = parseInt(prompt(`Combien de "${article_name}" avez-vous commandé?`));
        if(isNaN(quantity)){
            alert("Hey! Tu dois avoir un article au minimum!");
        }
        else {
            let total_htva = article_price * quantity;
            let total_tva = total_htva * 1.21;
            alert(`Pour ${quantity} "${article_name}" veuillez payer la somme de : ${total_tva.toFixed(2)} € (${total_htva.toFixed(2)}€ HTVA)`)
        }
    }
}
*/

//IF()... ELSE IF()... ELSE...
/*
const MIN = 0;
const MAX = 100;
let number_to_gess = Math.floor(Math.random()*(MAX-MIN))+MIN;

let input_user = parseInt(prompt(`Veuillez donner un nombre entre ${MIN} et ${MAX}?`))

if(isNaN(input_user)){
    alert("Tu ne sais pas lire ou quoi? 😒");
}
else if(input_user < MIN){
    alert(`${input_user} est en dessou de ${MIN}...`);
}
else if(input_user > MAX){
    alert(`${input_user} est au dessus de ${MAX}...`);
}
else if(input_user > number_to_gess){
    alert(`${input_user} est trop grand! Il fallait deviner ${number_to_gess}...`);
}
else if(input_user < number_to_gess){
    alert(`${input_user} est trop petit! Il fallait deviner ${number_to_gess}...`);
}
else{
    alert(`WAOUW! Vous êtes un devin!`);
}*/

//SWITCH()... CASE... : ...

/*
let lang_user = prompt("Veuillez indiquer votre langue (FR):\nPlease set your langage (EN):\nGelieve uw taal door te geven (NL):");

switch (lang_user) {
    case 'FR':
        alert("Bonjour!");
        break;
    case 'EN':
        alert("Hello!");
        break;
    case 'NL':
        alert("Goeiedag!");
        break;

    default:
        alert("No abla spanish...");
        break;
}*/

//TERNAIRE : (condition) ? valeur_si_vrai : valeur_si_faux
// /!\ : Ce n'est pas une structure conditionnelle, il s'agit d'une opération retournant une valeur selon une condition.

/*
let is_female = confirm("Êtes-vous une femme?");

let message = (is_female == true) ? "Bonjour Madame!" : "Bonjour Monsieur!";

alert(message);
*/

//OPÉRATEUR DE COMPARAISON
/*
console.log(`La stricte égalité se fait avec ==, il compare les valeurs situé à droite et à gauche`)
let x = 1;
let y = 1;
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x == y : ${x == y}`);
y = "1";
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x == y : ${x == y}`);
console.log(`On peut constater que seule la valeur influe, mais pas le type...`);

console.log(`Il existe aussi le ===, qui compare la valeur et le type!`);
y = 1;
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x === y : ${x === y}`);
y = "1";
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x === y : ${x === y}`);
console.log(`Bien entendu, il existe aussi le != et !==`);
console.log('!=');
y=1;
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x != y : ${x != y}`);
y = "1";
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x != y : ${x != y}`);
console.log('!==');
y = 1;
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x !== y : ${x !== y}`);
y = "1";
console.warn(`x : ${x} (${typeof (x)}) | y : ${y} (${typeof (y)})  =>  x !== y : ${x !== y}`);
*/

/* Truthy / Falsy */

/*console.log(`N'importe quel type peut être utilisé comme booléen!`);

let not_a_bool;
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
not_a_bool = null;
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
not_a_bool = 0;
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
not_a_bool = 1;
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
not_a_bool = -1;
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
not_a_bool = "";
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
not_a_bool = "Salut";
console.warn(`Ma valeur ${not_a_bool} (${typeof(not_a_bool)}) est considéré comme ${(not_a_bool)?'true':'false'}`);
*/