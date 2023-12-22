import { transformImageDramix } from 'dramix-transformer';

// Faire un script qui lorsque l'on lui passe un argument <couleur>, génère l'image de Dramix avec la couleur spécifiée en argument

// node index.js 50
// => génère une photo de dramix tournée à 50 degrés
// node index.js 70
// => génère une photo de dramix tournée à 70 degrés
// si le nombre est négatif, déclenche une erreur

// process.argv => arguments passés au programme
// 2e argument = nombre de degrés
let numberDegrees = process.argv[2];

numberDegrees = parseInt(numberDegrees);

console.log('vous avez passé', numberDegrees);

if (numberDegrees < 0) {
    console.log("Le nombre doit être positif");
    process.exit(1);
}

transformImageDramix(numberDegrees)
    // une fois que la fonction est exécutée, on affiche un succès
    .then(() => console.log('Dilation de Dramix avec succès'))
    // si il y'a une erreur, on affiche une erreur
    .catch((error) => console.log('Dramix n\'était pas prêt', error))