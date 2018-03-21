let FileSchema,
    mongoose;

mongoose = require('mongoose');
FileSchema = require('./schemas/file');

module.exports = mongoose.model('File', FileSchema);
