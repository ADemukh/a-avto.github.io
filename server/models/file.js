var File, mongoose;

mongoose = require('mongoose');

File = mongoose.model('File', {
    url: String,
    fileName: String,
    format: String,
    resourceType: String
});

module.exports = File;