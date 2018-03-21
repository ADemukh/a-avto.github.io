const cloudinary = require('cloudinary');
const config = require('../../config');

module.exports = cloudinary.config(config.storage.cloudinary);;
