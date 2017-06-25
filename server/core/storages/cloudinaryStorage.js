var cloudinary, cloudinaryStorage, config, storage;

cloudinary = require('cloudinary');
cloudinaryStorage = require('multer-storage-cloudinary');
config = require('../../config');

cloudinary.config(config.storage.cloudinary);

storage = cloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ['jpg', 'png'],
});

module.exports = storage;