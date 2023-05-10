// Année courante pour le copyright

let aujd = new Date();
let annee = aujd.getFullYear();

let credits = document.getElementById("credits");

credits.innerHTML = "&#169; " + annee + " Fanny Andreo";