



//Calcule de la moyenne des notes

const prompt = require("prompt-sync")();

let notes = []

while (true) {
  let il_y_a_t_il_des_notes_a_inserer = prompt("Avez vous une note a insérer? ");

    if(il_y_a_t_il_des_notes_a_inserer == "OUI"){
    
        let note = prompt("combien ?")
        notes.push(parseInt(note));
    }
    else{
        let somme = notes.reduce((a, b) => a + b, 0);
        console.log("La somme des notes est: " + somme);
        let moyenne = somme / notes.length;
        console.log("La moyenne des notes est: " + moyenne);
        break;
    }
  

}

