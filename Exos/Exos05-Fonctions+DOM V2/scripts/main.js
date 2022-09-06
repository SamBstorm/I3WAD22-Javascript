const html_formChoice = document.getElementById("formChoice");
const html_input1 = document.getElementById("input1");
const html_input2 = document.getElementById("input2");
const html_result = document.getElementById("result");
const html_form = document.getElementById("form");

const hiddeAllInputs = function () {
    html_form.classList.add("hidden");
}

const showInputs = function () {
    html_form.classList.remove("hidden");
    let html_labels =document.querySelectorAll("#form label");
    switch (html_formChoice.value) {
        case "1":
            document.querySelector("div#form>h2").innerText = "Rectangle";
            html_labels[0].innerText="Hauteur :";
            html_labels[1].innerText="Largeur :";
            document.querySelector("#form>div:last-child")
                .classList
                .remove("hidden");
            break;
        case "2":
            document.querySelector("div#form>h2").innerText = "Triangle";
            html_labels[0].innerText="Hauteur :";
            html_labels[1].innerText="Base :";
            document.querySelector("#form>div:last-child")
                .classList
                .remove("hidden");
            break;
        case "3":
            document.querySelector("div#form>h2").innerText = "Carré";
            html_labels[0].innerText="Côté :";
            document.querySelector("#form>div:last-child")
                .classList
                .add("hidden");
            break;
        case "4":
            document.querySelector("div#form>h2").innerText = "Cercle";
            html_labels[0].innerText="Rayon :";
            document.querySelector("#form>div:last-child")
                .classList
                .add("hidden");
            break;

        default:
            break;
    }
}

const calculer = function () {
    let surface;
    let perimeter;
    let input1 = parseFloat(html_input1.value);
    let input2 = parseFloat(html_input2.value);
    switch (html_formChoice.value) {
        case "1":
            surface = rect_surface(input1, input2);
            perimeter = rect_perimeter(input1, input2);
            html_result.innerText =
                `Un rectangle de largeur ${input2} et d'une hauteur ${input1},
            \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
        case "2":
            surface = tri_surface(input1, input2);
            perimeter = tri_perimeter(input1, input2);
            html_result.innerText =
                `Un triangle de base ${input2} et d'une hauteur ${input1},
                \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
        case "3":
            surface = carre_surface(input1);
            perimeter = carre_perimeter(input1);
            html_result.innerText =
                `Un carré ayant pour côté ${input1},
            \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
        case "4":
            surface = circle_surface(input1);
            perimeter = circle_perimeter(input1);
            html_result.innerText =
                `Un cercle ayant pour rayon ${input1},
            \na un périmètre de ${perimeter} et une surface de ${surface}.`;
            break;
        default:
            throw new Error(`Bad choice...`)
            break;
    }
}

hiddeAllInputs();