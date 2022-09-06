const rect_surface = function(hauteur, largeur){
    checkNumber(hauteur,'Hauteur');
    checkNumber(largeur,'Largeur');
    return hauteur * largeur;
}

const rect_perimeter = function(hauteur, largeur){
    checkNumber(hauteur,'Hauteur');
    checkNumber(largeur,'Largeur');
    return (hauteur + largeur) * 2;
}

const tri_surface = function(hauteur, base){
    checkNumber(base,'Base');
    checkNumber(hauteur,'Hauteur');
    return (base * hauteur) / 2;
}

const tri_perimeter = function(hauteur, base){
    checkNumber(base,'Base');
    checkNumber(hauteur,'Hauteur');
    return Math.sqrt(base**2 + Math.pow(hauteur,2)) + base + hauteur; // x**2 ou Math.pow(x,2) => x²
    //return Math.hypot(base,hauteur) + base + hauteur;
}

const carre_surface = function(cote){
    checkNumber(cote, "Côté");
    return cote**2;
}

const carre_perimeter = function(cote){
    checkNumber(cote, "Côté");
    return cote*4;
}

const circle_surface = function(rayon){
    checkNumber(rayon, "Rayon");
    return (rayon**2)*Math.PI;
}

const circle_perimeter = function(rayon){
    checkNumber(rayon, "Rayon");
    return rayon*2*Math.PI;
}

const checkNumber = function(nb, nameof = 'variable'){
    if(typeof(nb) != 'number')
        throw new TypeError(`Bad type : ${nameof} (${typeof(nb)})`);
    if(isNaN(nb)) 
        throw new Error(`Bad value : ${nameof} (${nb})`);
}