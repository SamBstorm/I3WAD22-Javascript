let article_name = prompt("Veuillez indiquer le nom de l'article :");
if (article_name == null || article_name == "") {
    alert("Hey! Il faut un nom!");
}
else {
    let article_price = parseFloat(prompt(`Quel est le prix unitaire de "${article_name}" ?`));
    if (isNaN(article_price)) {
        alert("Hey! Pas de prix, c'est pas gratuit!");
    }
    else {
        let quantity = parseInt(prompt(`Combien de "${article_name}" avez-vous commandé?`));
        if(isNaN(quantity)){
            alert("Hey! Tu dois avoir un article au minimum!");
        }
        else {
            let total_htva = article_price * quantity;
            let total_tva = total_htva * 1.21;
            alert(`Pour ${quantity} "${article_name}" veuillez payer la somme de : ${total_tva.toFixed(2)} € (${total_htva.toFixed(2)}€ HTVA)`)
        }
    }
}