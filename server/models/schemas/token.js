let mongoose;

mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    token: String,
    validTill: String,
    active: Boolean,
});
