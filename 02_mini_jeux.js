// L'ordinateur va choisir au hasard un nombre entre 1 et 10 et on va avoir 3 essaies pour trouver le nombre mystère. 
// Si tu trouves la bonne réponse, message " Félications + numéro mystère découvert" ou sinon
// pas de chance vous avez perdu cette fois ci + numéro mystère découvert (replay)

/** */

let essaies =[
    1,
    7,
    9,
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bonNumero = getRandomInt(1,10);

console.log(bonNumero);

for (i=0; i<essaies.length; i++){
    console.log(essaies[i])
    if (bonNumero === essaies[i]) {
        console.log("Félicitations")
        break;
    }
    else {
        console.log("Pas de chance")
    }
}
