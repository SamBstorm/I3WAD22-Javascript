const html_formChoice = document.getElementById("formChoice");
const html_rect_hauteur = document.getElementById("rect_hauteur");
const html_rect_largeur = document.getElementById("rect_largeur");
const html_tri_hauteur = document.getElementById("tri_hauteur");
const html_tri_base = document.getElementById("tri_base");
const html_carre_cote = document.getElementById("carre_cote");
const html_circle_rayon = document.getElementById("circle_rayon");
const html_result = document.getElementById("result");
const html_rect = document.getElementById("rect");
const html_tri = document.getElementById("tri");
const html_carre = document.getElementById("carre");
const html_circle = document.getElementById("circle");

const hiddeAllInputs = function () {
    html_rect.classList.add("hidden");
    html_tri.classList.add("hidden");
    html_carre.classList.add("hidden");
    html_circle.classList.add("hidden");
}

const showInputs = function () {
    hiddeAllInputs();
    switch (html_formChoice.value) {
        case "1":
            html_rect.classList.remove("hidden");
            break;
        case "2":
            html_tri.classList.remove("hidden");
            break;
        case "3":
            html_carre.classList.remove("hidden");
            break;
        case "4":
            html_circle.classList.remove("hidden");
            break;
        default:
            throw new Error(`Bad choice...`)
            break;
    }
}

const calculer = function () {
    let surface;
    let perimeter;
    switch (html_formChoice.value) {
        case "1":
            let rect_hauteur = parseFloat(html_rect_hauteur.value);
            let rect_largeur = parseFloat(html_rect_largeur.value);
            surface = rect_surface(rect_hauteur, rect_largeur);
            perimeter = rect_perimeter(rect_hauteur, rect_largeur);
            html_result.innerText =
            `Un rectangle de largeur ${rect_largeur} et d'une hauteur ${rect_hauteur},
            \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
            case "2":
                let tri_hauteur = parseFloat(html_tri_hauteur.value);
                let tri_base = parseFloat(html_tri_base.value);
                surface = tri_surface(tri_hauteur, tri_base);
                perimeter = tri_perimeter(tri_hauteur, tri_base);
            html_result.innerText =
                `Un triangle de base ${tri_base} et d'une hauteur ${tri_hauteur},
                \na un périmètre de ${perimeter} et une surface de ${surface}.`;
                break;
                case "3":
                    let carre_cote = parseFloat(html_carre_cote.value);
                    surface = carre_surface(carre_cote);
            perimeter = carre_perimeter(carre_cote);
            html_result.innerText =
            `Un carré ayant pour côté ${carre_cote},
            \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
        case "4":
            let circle_rayon = parseFloat(html_circle_rayon.value);
            surface = circle_surface(circle_rayon);
            perimeter = circle_perimeter(circle_rayon);
            html_result.innerText =
            `Un cercle ayant pour rayon ${circle_rayon},
            \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
        default:
            throw new Error(`Bad choice...`)
            break;
        }
    }

hiddeAllInputs();