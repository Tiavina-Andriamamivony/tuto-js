//Les boucles

// Boucle for
for (let i = 0; i < 5; i++) {   
    console.log("Itération " + i);
}

// Boucle while
let i = 0;
while ( i < 5) {
    console.log("Itération " + i);
    i++;  
}

// Boucle do...while
let j = 0;

do {
    console.log("Itération " + j);
    j++;
}   while (j < 5);

// Boucle for...of (pour les tableaux)
const fruits = ["pomme", "banane", "orange"];
for (const fruit of fruits) {
    console.log("Fruit: " + fruit);
}

// Boucle for...in (pour les objets)
const person = { name: "Alice", age: 30, city: "Paris"
};  

for (const key in person) {
    console.log(key + ": " + person[key]);
}
// Boucle forEach (pour les tableaux)
fruits.forEach((fruits) => { 
    console.log("Fruit: " + fruits);
}); 