var cloudinary, cloudinaryStorage, storage;

cloudinary = require('../cloudinary');
cloudinaryStorage = require('multer-storage-cloudinary');

storage = cloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ['jpg', 'png']
});

module.exports = storage;