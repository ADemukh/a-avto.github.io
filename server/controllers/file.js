/*eslint strict:0  */
module.exports = {
    getFileInfo: function getFileInfo(file) {
        return {
            originalName: file.originalname,
            fileName: file.filename,
            destination: file.destination,
            extension: '.' + file.mimetype.split('/')[1]
        };
    },
    getSrcUrl: function getSrcUrl(fileName) {
        return 'url' + fileName;
    }
};