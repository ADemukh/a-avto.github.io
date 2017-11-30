var mongoose;

mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: String,
    type: String,
    forClient: Boolean,
    forShop: Boolean
});