let nombre1 = Number.parseFloat(prompt("Premier nombre à virgule : " ));
let nombre2 = Number.parseFloat(prompt("Deuxième nombre à virgule :"));



// console.log(nombre1);
// console.log(nombre2);
 

let nombre1Entier = Math.trunc(nombre1);
// console.log(nombre1Entier)

let resultat = nombre1Entier*nombre2;

alert(resultat);
