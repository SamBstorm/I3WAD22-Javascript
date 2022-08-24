const SEUIL_SALAIRE = 1400;
const CHOMAGE_BASE = 500;
const CHOMAGE_BONUS = 200;
const PRIME_INTERIM_MIN = 200;
const PRIME_INTERIM_MAX = 400;

let contrat_type = prompt("Quel type de contrat avez-vous:\n(M)i-temps\n(P)lein temps\n(I)nterim");
if (contrat_type) contrat_type = contrat_type.toUpperCase();
if (contrat_type != 'M' && contrat_type != 'P' && contrat_type != 'I') {
    alert("Vous ne faites pas partie des catégories citées...")
}
else {
    let salaire = parseFloat(prompt("Quel est votre salaire mensuel :"));
    if (isNaN(salaire)) {
        alert(`La valeur ${salaire} n'est pas valide...`);
    }
    else {
        let total = salaire;
        switch (contrat_type) {
            case "M":
                total += CHOMAGE_BASE;
                if (salaire < SEUIL_SALAIRE) total += CHOMAGE_BONUS;
                break;
            case "I":
                if (salaire < SEUIL_SALAIRE) total += PRIME_INTERIM_MAX;
                else total += PRIME_INTERIM_MIN;
                break;
        }
        let cotisation;
        if (total < 800) {
            cotisation = total * 0.15;
        }
        else if (total < 1200) {
            cotisation = total * 0.25;
        }
        else if (total < 1500) {
            cotisation = total * 0.3;
        }
        else {
            cotisation = total * 0.32;
        }
        let contrat_type_full = "Temps-plein";
        let bonus_message = "";
        switch (contrat_type) {
            case "I":
                contrat_type_full = "Interim";
                bonus_message = ", avec une prime"
                break;
            case "M":
                contrat_type_full = "Mi-temps";
                bonus_message = (salaire + CHOMAGE_BASE < total)?", avec bonus":"";
                break;
        }

        alert(`Pour un ${contrat_type_full} de ${salaire}€${bonus_message}. Total : ${total}€ | Cotisation : ${cotisation}€`)
    }
}