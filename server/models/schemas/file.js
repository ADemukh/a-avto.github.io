let mongoose;

mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    url: String,
    fileName: String,
    format: String,
    resourceType: String,
});
