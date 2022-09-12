const html_productList = document.querySelector("#productList>tbody");
const html_cart = document.querySelector("#cart>tbody");
const html_total = document.querySelector("#total");
html_total.value = 0;


const products = [
    {name : "Chaise", price : 25},
    {name : "Table", price : 150},
    {name : "Meuble TV", price : 250}
];

const addProductInList = function (product) {
    //html_productList.innerHTML += "<tr><td></td><td></td><td></td></tr>";
    let tr = createTR(product);
    let td_btn = document.createElement('td');
    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'Ajouter au panier';
    btn.onclick = function() {
            ajouterAuPanier(product);
        };
    html_productList.append(tr);
    tr.append(td_btn);
    td_btn.append(btn);
}

const addProductInCart = function (product){
    let tr = createTR(product);
    html_cart.append(tr);
}

const createTR = function(obj){
    let tr = document.createElement('tr');
    for( const key in obj){
        let td = document.createElement('td');
        td.innerText = obj[key];
        tr.append(td);
    }
    return tr;
}

const initProductList = function (products) {
    // for (let i = 0; i < products.length; i++) {
    //     addProductInList(products[i]);
    // }
    // for (const key in products) {
    //     const elem = products[key];
    //     addProductInList(elem);
    // }
    // for (const product of products) {
    //     addProductInList(product);
    // }
    products.forEach(product => {
        addProductInList(product);
    });
}

const ajouterAuPanier = function(product){
    addProductInCart(product);
    html_total.value = parseFloat(html_total.value) + product.price;
}

initProductList(products);