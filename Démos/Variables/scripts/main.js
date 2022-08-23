//NOMENCLATURE :

//snake_case : des underscore entre les mots    (Généralement pour le web)
//lowerPascalCase : utilisation de majuscule pour chaque mots, sauf le premier (Généralement pour les variables)
//UpperPascalCase : utilisation de majuscule pour chaque mots (Généralement pour la programmation avancée)
//kebap-case : utilisation de tirets entre chaque mots (Généralement pour la gestion de fichiers)
//UPPERCASE : utilisation que de majuscules (Généralement pour les constantes)

//Déclaration de variable :

let ma_variable = 42;
let ma_variable_2 = "Javascript";
let ma_derniere_variable;

//Type de variable :

//NUMBER
console.log("Nous avons la variable varNumber");
let varNumber = 42 ;
console.log(`varNumber est de type ${typeof(varNumber)} et a pour valeur : ${varNumber}`); //'number'

varNumber = 3.1415;
console.log(`varNumber est de type ${typeof(varNumber)} et a pour valeur : ${varNumber}`); //'number'

varNumber = Number("42");   //Utilisation du constructeur de la fonction Number()
console.log(`varNumber est de type ${typeof(varNumber)} et a pour valeur : ${varNumber}`); //'number'

varNumber = Number("Salut");
console.log(`varNumber est de type ${typeof(varNumber)} et a pour valeur : ${varNumber}`); //'number'


//Le Type Number, peut valoir des entiers, des décimales, mais aussi des :
// - NaN (Not a Number) qui distingue les nombres mal convertis
console.log("Quand on analyse une variable possiblement NaN, on utilise isNaN(...)");
console.log(isNaN(varNumber));
// - Infinity qui représente la valeur infinie (exemple x/0)
console.log(`5 / 0 = ${5/0}`);

//STRING
let varString = "La valeur de la variable varString est défini entre des \" \", je suis obligé d'utiliser les \\ pour afficher les \"... ";
console.log(varString);
varString = 'La valeur de la variable varString est défini entre des \' \', je suis obligé d\'utiliser les \\ pour afficher les \'... ';
console.log(varString);
varString = `La valeur de la variable varString est défini entre des \` \`, je suis obligé d'utiliser les \\ pour afficher les \`, mais on ne les utilise jamais, alors cela me simplifie l'affichage de " et ' ! `;
console.log(varString);
let varString2 = "est une nouvelle variable";
varString = `A l'aide des \` je peux appeller le contenu d'une autre variable grace à \$\{  \}. Exemple : varString2 ${varString2} `;
console.log(varString);

varString = String("Je suis un constructeur inutile...");

//BOOLEAN
let varBoolean = true;
console.log(`Les variables boolean n'ont que deux valeurs : ${varBoolean}`);
varBoolean = false;
console.log(`ou ${varBoolean}`);

//NULL vs UNDEFINED!

let varNull;
console.log(`Si une variable n'a pas encore reçu de valeur, elle est par défaut de type ${varNull}`);
varNull = null;
console.log(`Pour obtenir un ${varNull} il nous faut soit le définir nous-même, soit par une fonction...`)
console.log(`Attention, le type de null est ${typeof(varNull)}!`);

//CONSTANTE

const PI = 3.1415;

console.log(`La constante PI, contient ${PI}, et ne peut changer de valeur...`);
//PI = 3; //<- ERREUR...

//L'objet Math

console.log(`La racine carré de 36 est ${Math.sqrt(36)}`)
console.log(`La racine carré de 2 est ${Math.SQRT2}`)
console.log(`La constante PI de Math est plus précise que ma constante...`);
console.log(`${Math.PI} vs ${PI}`);

console.log(`Un type number peut atteindre la valeur de ${Number.MAX_VALUE}`);
console.log(`Un type number peut atteindre la valeur de ${Number.POSITIVE_INFINITY}`);
