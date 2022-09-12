const html_dateNaissance = document.querySelector('#dateNaissance');
const html_valid = document.querySelector('#valid');
html_valid.onclick = function () {
    let dateNaissance = new Date(html_dateNaissance.value);
    let jours = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
    let jourNaissance = jours[dateNaissance.getDay()];
    console.log(jourNaissance);
    let mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
    let moisNaissance = mois[dateNaissance.getMonth()];
    console.log(moisNaissance);
    alert(`Vous êtes né le ${jourNaissance} ${dateNaissance.getDate()} ${moisNaissance} en ${dateNaissance.getFullYear()}!`)

    let anneeAujourdhui = new Date().getFullYear();
    console.log(anneeAujourdhui);
    alert(`Cette année vous aurez vos ${anneeAujourdhui - dateNaissance.getFullYear()} ans!`);

    let aujourd_milli = new Date().getTime(); //Nombre de millisecondes d'aujourd'hui depuis le 01/01/1970
    let naissance_milli = dateNaissance.getTime(); //Nombre de millisecondes de notre naissance depuis le 01/01/1970
    let diff_milli = aujourd_milli - naissance_milli; //On récupère le nombre de milliseconde qui sépare nos 2 dates...
    alert(`Et aujourd'hui, vous avez ${(new Date(diff_milli).getFullYear()-1970)} ans!`);
}