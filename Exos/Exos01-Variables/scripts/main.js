let lastname = prompt("Veuillez indiquer votre nom :");
let firstname = prompt("Veuillez indiquer votre prénom :");
let nb1 = prompt("Pour l'addition quel est le premier nombre :")
let nb2 = prompt("et le second nombre :")
let result = parseInt(nb1) + parseInt(nb2);
// alert("Bonjour " + lastname + " " + firstname + ", le résultat de " + nb1 + " + " +nb2+" est "+ nb1 + nb2);
// alert("Bonjour " + lastname + " " + firstname + ", le résultat de " + nb1 + " + " +nb2+" est "+ result);
alert(`Bonjour ${lastname} ${firstname}, le résultat de ${nb1} + ${nb2} est ${result}`);