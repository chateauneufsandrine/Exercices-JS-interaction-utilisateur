let pointure = Number.parseFloat(prompt("quelle est ta pointure ?"));
let anneeNaissance = Number.parseFloat(prompt("Quelle est ton année de naissance ?"));


// let resultat1 = pointure*2;
// console.log(resultat1);

// let resultat2 = resultat1 + 5;
// console.log(resultat2);

// let resultat3 = resultat2*50;
// console.log(resultat3);

// let resultat4 = resultat3 - annéeNaissance;
// console.log(resultat4);

// const année = 1766;

// let resultat5 = resultat4 + année;
// console.log(resultat5);

function multiplier(nombre1, nombre2) {
    return nombre1 * nombre2;
}  
function additionner(nombre1, nombre2) {
    return nombre1 + nombre2;
} 
function soustraire(nombre1, nombre2) {
    return nombre1 - nombre2;
}
let resultat = multiplier(pointure, 2);
 resultat = additionner(resultat, 5);
 resultat = multiplier(resultat, 50);
 resultat = soustraire(resultat, anneeNaissance);
 resultat = additionner(resultat, 1766);

console.log(resultat);


  










