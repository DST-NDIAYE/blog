const multer = require('multer')


const LesExtension = {
    'image/png': 'png',
    'image/gif': 'gif',
    'image/jpg': 'jpeg',
    'image/jpeg': 'jpeg',
    'image/JPG': 'jpeg'
}

const storage = multer.diskStorage({
    destination: (req, file, fonc) => {
        fonc(null, 'public/images')
    },
    filename: (req, file, fonc) => {
        var nomDuFichier = `image_${ Date.now()}`
        var extension = LesExtension[file.mimetype]
        nomDuFichier = nomDuFichier + '.' + extension;
        fonc(null, nomDuFichier)
    }
});

module.exports = multer({ storage }).single('image'); 