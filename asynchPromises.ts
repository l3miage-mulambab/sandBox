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


// Un autre exemple pour la fonction joueSon

function jouerListeSonsSimultanément(urls, cb) {
    // Créer une promesse pour chaque son à jouer
    const promises = urls.map(url => jouerSonPromise(url));

    // Attendre que toutes les promesses soient résolues
    Promise.all(promises)
        .then(() => {
            // Tous les sons ont été joués, appeler le callback
            cb();
        })
        .catch(error => {
            // Gérer les erreurs
            console.error("Une erreur s'est produite lors de la lecture des sons :", error);
        });
}

function jouerSonPromise(url) {
    return new Promise((resolve, reject) => {
        jouerSon(url, () => {
            resolve(); // Résoudre la promesse une fois que le son est terminé
        });
    });
}

function jouerSon(url, cb) {
    console.log(`Début de la lecture du son ${url}`);
    setTimeout(() => {
        console.log(`Fin de la lecture du son ${url}`);
        cb();
    }, 500 + Math.random() * 1000);
}

// Exemple d'utilisation :
const urls = ['url1.mp3', 'url2.mp3', 'url3.mp3'];
jouerListeSonsSimultanément(urls, () => {
    console.log('Tous les sons ont été lus.');
});

