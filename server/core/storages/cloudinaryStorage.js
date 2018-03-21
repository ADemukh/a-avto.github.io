const cloudinary = require('../cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

module.exports = cloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
});
