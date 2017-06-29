var cloudinary, config;

cloudinary = require('cloudinary');
config = require('../../config');
cloudinary.config(config.storage.cloudinary);

module.exports = cloudinary;