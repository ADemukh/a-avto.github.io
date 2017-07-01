
var multer, storage;

multer = require('multer');

storage = multer.diskStorage({
    //multers disk storage settings
    destination: function destination(req, file, cb) {
        cb(null, './.uploads/');
    },
    filename: function filename(req, file, cb) {
        var datetimestamp;

        datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

module.exports = storage;