const html_demoTimeout = document.querySelector("#demo-timeout");
const colors = ["red", "blue", "yellow", "chartreuse", "magenta"];

const demoTimeout = function (temps) {
    html_demoTimeout.innerText = `Il vous a fallu ${temps} secondes pour voir ce texte...`;
};

const changeH1Color = function () {
    let h1 = document.querySelector("#h1-timeout");
    h1.style.color = colors[index_color % colors.length];
    index_color++;
    let id = setTimeout(
        changeH1Color,
        1000
    );
    document.querySelector("#stopTimeout2").onclick = function () {
        clearTimeout(id);
    };
};

const changeH1ColorInterval = function () {
    let h1 = document.querySelector("#h1-interval");
    h1.style.color = colors[(index_color + 3) % colors.length];
    index_color++;
}

let millisecondes = 5000;
let index_color = 0;

let timeout_id = setTimeout(
    function () { demoTimeout(millisecondes / 1000); },
    millisecondes
);

document.querySelector("#stopTimeout").onclick = function () {
    clearTimeout(timeout_id);
};

setTimeout(
    changeH1Color,
    1000
);

let interval_id = setInterval(
    changeH1ColorInterval,
    1000
);

document.querySelector("#stopInterval").onclick = function () {
    clearInterval(interval_id);
};


