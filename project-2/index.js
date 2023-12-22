
// import => ECMASCRIPT
import { Image } from 'image-js'; // importe que Image
// vous pouvez voir ça comme une déstructuration d'objet. 

/** 
// require => commonJS
const { Image } = require('image-js'); // importe tout le module 

export {
    Image: "a"
}

const {
    Image
} = {
    Image: {},
    Truc: 0
}
*/

async function transformImageDramix() {
    // on charge l'image
    let image = await Image.load('otter_banana.png');
    // on dilate Dramix
    let dilated = image
        .grey()
        .dilate({
            kernel: [[1, 0.75, 1], [1, 1, 1], [1, 0.5, 1]],
            iterations: 2
        });

    // on sauvegarde Dramix dilaté
    await dilated.save('dramix-dilate.png');
}

transformImageDramix()
    // une fois que la fonction est exécutée, on affiche un succès
    .then(() => console.log('Dilation de Dramix avec succès'))
    // si il y'a une erreur, on affiche une erreur
    .catch((error) => console.log('Dramix n\'était pas prêt', error))