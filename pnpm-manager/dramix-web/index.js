import { transformImageDramix } from 'dramix-transformer';

// Faire un script qui lorsque l'on lui passe un argument <couleur>, génère l'image de Dramix avec la couleur spécifiée en argument

// node index.js red
// => génère une photo de dramix rouge
// node index.js green
// => génère une photo de dramix verte


transformImageDramix(50)
    // une fois que la fonction est exécutée, on affiche un succès
    .then(() => console.log('Dilation de Dramix avec succès'))
    // si il y'a une erreur, on affiche une erreur
    .catch((error) => console.log('Dramix n\'était pas prêt', error))