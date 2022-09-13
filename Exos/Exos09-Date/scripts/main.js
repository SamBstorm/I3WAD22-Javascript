const html_radio_choixDate = document.querySelectorAll("input[name=choixDate]");

const nombreDeNuit = function (jour, mois) {
    let today = new Date();
    let dateCible = new Date(today.getFullYear(), mois - 1, jour, today.getHours() + 1);
    if (dateCible < today) {
        dateCible = new Date(today.getFullYear() + 1, mois - 1, jour, today.getHours() + 1);
    }
    let date_milli = dateCible.getTime();
    let today_milli = today.getTime();
    let diff_milli = date_milli - today_milli;
    return Math.floor(diff_milli / 86400000);
}

const setAChoice = function () {
    let choice;
    for (const date of html_radio_choixDate) {
        if (date.checked) choice = date.value;
    }
    return choice;
}

const validateChoice = function () {
    let choice = setAChoice();
    let nbNuit = 0;
    switch (choice) {
        case "newyear":
            nbNuit = nombreDeNuit(1, 1);
            break;
        case "christmas":
            nbNuit = nombreDeNuit(25, 12);
            break;
        case "saintnic":
            nbNuit = nombreDeNuit(6, 12);
            break;
        case "valentine":
            nbNuit = nombreDeNuit(14, 2);
            break;
        case "halloween":
            nbNuit = nombreDeNuit(31, 10);
            break;
        case "custom":
            // nbNuit = nombreDeNuit(1, 1);
            break;

        default:
            break;
    }
    document.querySelector("#result").innerHTML=`Il reste ${nbNuit} dodo${(nbNuit>1)?'s':''}!`;
}

document.querySelector("input[type=button]").onclick = validateChoice;