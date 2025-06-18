//Tuto condition
const prompt = require('prompt-sync')();

//Vérifier l'age d'un utilisateur

console.log("Bienve,u dans la discothèque js /n");
let age = prompt("Quel est votre age ? ");


// Les opérateurs de comparaison:  == (si c'est égal à), === (si c'est strictement égal à) exemple 
// 
//  5 == "5" // true, car la valeur est égale, mais le type est différent
//  5 === "5" // false, car la valeur et le type sont différents
// 
// , != (si ce n'est pas égal à), !== (si ce n'est pas strictement égal à), <, >, <=, >=
// Les opérateurs logiques: && (et), || (ou), ! (non)



// if (age >= 18) {
//     console.log("Bienvenue dans la discothèque !");
// }
// else if (age < 0) {
//     console.log("L'âge ne peut pas être négatif. Veuillez entrer un âge valide.");
// }
// else {
//     console.log("Désolé, vous devez avoir au moins 18 ans pour entrer dans la discothèque.");
// }



let validName= prompt("Quel est votre nom ? ");
let validPassword = prompt("Quel est votre mot de passe ? ");

if (validName === "admin" && validPassword === "1234") {
    console.log("Bienvenue, admin !");
}

else console.log("Nom d'utilisateur ou mot de passe incorrect. Veuillez réessayer.");
 

