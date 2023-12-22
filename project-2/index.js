
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
    let dilated = image.dilate();
    // on sauvegarde Dramix dilaté
    await dilated.save('dramix-dilate');
}