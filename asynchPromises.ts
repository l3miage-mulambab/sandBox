// Fonction asynchrone et Promesses

// Définition de la fonction asynchrone h
async function h(nb:number): Promise<number> {
    try {
        const v = nb + await P; // Attente de la résolution de la promesse P
        return v; // Retourne la somme de nb et de la valeur résolue de P
    } catch(err) {
        console.error("Error getting P:", err);
        return -1; // Retourne -1 en cas d'erreur
    }
}

// Supposons que nous ayons une promesse P qui se résout après 1 seconde avec la valeur 10
const P: Promise<number> = new Promise(resolve => {
    setTimeout(() => {
        resolve(10); // La promesse se résout avec la valeur 10 après 1 seconde
    }, 1000);
});

// Utilisation de la fonction h
async function exampleUsage() {
    try {
        const result = await h(5); // Appel de la fonction h avec l'argument 5
        console.log("Result:", result); // Affiche le résultat retourné par la fonction h
    } catch (err) {
        console.error("An error occurred:", err); // Affiche une erreur s'il y en a une
    }
}

// Appel de la fonction exampleUsage pour démarrer l'exemple
exampleUsage();
