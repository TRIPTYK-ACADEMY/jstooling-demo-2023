
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

export async function transformImageDramix(degrees) {
    // on charge l'image
    let image = await Image.load('otter_banana.png');
    // on dilate Dramix
    let dilated = image
        .grey()
        // tourne tourne de X degrés
        .rotate(degrees);

    // on sauvegarde Dramix dilaté
    await dilated.save('dramix-dilate.png');
}
