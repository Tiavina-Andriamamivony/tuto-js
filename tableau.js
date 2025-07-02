//Les Tableaux en JavaScript
// Les tableaux sont des structures de données qui permettent de stocker plusieurs valeurs dans une seule variable.
// Ils sont utilisés pour organiser des données de manière séquentielle et peuvent contenir des éléments de différents types, y compris des nombres, des chaînes de caractères, des objets, etc.    


// let fako_table = [5, "heyyy", true, 3.14, "ok"];

let tableau = ["pomme", "poire", "cerise", "orange", "kiwi"];

console.log(tableau[0]); // Affiche "pomme"
console.log(tableau[1]); // Affiche "poire"
console.log(tableau[2]); // Affiche "cerise"
console.log(tableau[3]); // Affiche "orange"
console.log(tableau[4]); // Affiche "kiwi"
console.log(tableau[5]); // Affiche "undefined"
console.log(tableau.length); // Affiche 5
console.log(tableau[tableau.length - 1]); // Affiche "kiwi"
console.log(tableau[tableau.length]); // Affiche "undefined"
console.log(tableau[tableau.length - 2]); // Affiche "orange"

//Les fonctions de base des tableaux
// Les tableaux en JavaScript offrent de nombreuses méthodes pour manipuler les données qu'ils contiennent
// Voici quelques-unes des méthodes les plus courantes :

// 1. `push()`: Ajoute un ou plusieurs éléments à la fin du tableau et retourne la nouvelle longueur du tableau.
tableau.push("fraise");

console.log(tableau); // Affiche ["pomme", "poire", "cerise", "orange", "kiwi", "fraise"]
// 2. `pop()`: Supprime le dernier élément du tableau et le retourne.
let dernierElement = tableau.pop();
console.log(dernierElement); // Affiche "fraise"
console.log(tableau); // Affiche ["pomme", "poire", "cerise", "orange", "kiwi"]
// 3. `shift()`: Supprime le premier élément du tableau et le retourne.
let premierElement = tableau.shift();
console.log(premierElement); // Affiche "pomme"
console.log(tableau); // Affiche ["poire", "cerise", "orange", "kiwi"]

// 4. `unshift()`: Ajoute un ou plusieurs éléments au début du tableau et retourne la nouvelle longueur du tableau.
tableau.unshift("banane");      
console.log(tableau); // Affiche ["banane", "poire", "cerise", "orange", "kiwi"]

// 5. `splice()`: Modifie le contenu du tableau en ajoutant ou en supprimant des éléments à partir d'un index spécifié.
tableau.splice(2, 1, "mangue"); // Supprime 1 élément à l'index 2 et ajoute "mangue"
console.log(tableau); // Affiche ["banane", "poire", "mangue", "orange", "kiwi"]

// 6. `slice()`: Retourne une copie superficielle d'une portion du tableau dans un nouveau tableau.
let sousTableau = tableau.slice(1, 3); // Copie les éléments de l'index 1 à 2
console.log(sousTableau); // Affiche ["poire", "mangue"]

// 7. `indexOf()`: Retourne le premier index d'un élément dans le tableau, ou -1 s'il n'est pas trouvé.
let index = tableau.indexOf("orange");

// Ce que je vous conseille est de consulter W3school pour plus de détails sur les tableaux en JavaScript.
// https://www.w3schools.com/js/js_arrays_methods.asp