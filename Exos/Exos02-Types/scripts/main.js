let article_name = prompt("Veuillez indiquer le nom de l'article :");
let article_price = parseFloat(prompt(`Quel est le prix unitaire de "${article_name}" ?`));
let quantity = parseInt(prompt(`Combien de "${article_name}" avez-vous commandé?`));
let total_htva = article_price * quantity;
let total_tva = total_htva * 1.21;
alert(`Pour ${quantity} "${article_name}" veuillez payer la somme de : ${total_tva.toFixed(2)} € (${total_htva.toFixed(2)}€ HTVA)`)


// VERSION AVEC OBJECT
// let article = {};
// article.name = prompt("Veuillez indiquer le nom de l'article :");
// article.price = parseFloat(prompt(`Quel est le prix unitaire de "${article.name}" ?`));

// let quantity = parseInt(prompt(`Combien de "${article.name}" avez-vous commandé?`));
// let total_htva = article.price * quantity;
// let total_tva = total_htva * 1.21;
// alert(`Pour ${quantity} "${article.name}" veuillez payer la somme de : ${total_tva.toFixed(2)} € (${total_htva.toFixed(2)}€ HTVA)`)
