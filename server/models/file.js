var File, mongoose;

mongoose = require('mongoose');

File = mongoose.model('File', {
    srcUrl: String,
    storage: {
        fileName: String,
        originalName: String,
        filePath: String,
        format: String,
        resourceType: String
    },
    cloudinary: {
        public_id: String,
        format: String,
        resource_type: String,
        url: String,
        secure_url: String
    }
});

module.exports = File;