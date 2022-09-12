const html_productList = document.querySelector("#productList>tbody");
const html_cart = document.querySelector("#cart>tbody");
const html_total = document.querySelector("#total");
html_total.value = 0;

const products_name = ["Chaise", "Table", "Meuble TV"];
const products_price = [25, 150, 250];
const products = [products_name, products_price];

const addProductInList = function (name, price) {
    //html_productList.innerHTML += "<tr><td></td><td></td><td></td></tr>";
    let tr = createTR(name,price);
    let td_btn = document.createElement('td');
    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'Ajouter au panier';
    btn.onclick = function() {
            ajouterAuPanier(name, price);
        };
    html_productList.append(tr);
    tr.append(td_btn);
    td_btn.append(btn);
}

const addProductInCart = function (name, price){
    let tr = createTR(name,price);
    html_cart.append(tr);
}

const createTR = function(name,price){
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_price = document.createElement('td');
    td_name.innerText = name;
    td_price.innerText = price;
    tr.append(td_name);
    tr.append(td_price);
    return tr;
}

const initProductList = function (names, prices) {
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const price = prices[i];
        addProductInList(name, price);
    }
}

const ajouterAuPanier = function(name, price){
    addProductInCart(name,price);
    html_total.value = parseFloat(html_total.value) + price;
}

initProductList(products_name,products_price);