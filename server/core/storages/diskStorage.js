const multer = require('multer');

module.exports = multer.diskStorage({
    // multers disk storage settings
    destination: function destination(req, file, cb) {
        cb(null, './.uploads/');
    },
    filename: function filename(req, file, cb) {
        const datetimestamp = Date.now();
        cb(null, `${file.fieldname}-${datetimestamp}.${file.originalname.split('.')[file.originalname.split('.').length - 1]}`);
    },
});
