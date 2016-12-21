module.exports = {
    getFileInfo: function (file) {
        return {
            originalFileName: file.originalname,
            fileName: file.filename,
            destination: file.destination,
            extension: '.' + file.mimetype.split('/')[1]
        };
    }
};