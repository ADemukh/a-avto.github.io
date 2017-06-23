/*eslint strict:0  */
var config, express, fileController, multer, router, storage, upload;

express = require('express');
router = express.Router();
fileController = require('../controllers/file');
config = require('../config');
multer = require('multer');

storage = multer.diskStorage({
    //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './.uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp;

        datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

upload = multer({
    storage: storage
}).single('file');

router.post('/upload', upload, function uploadFn(req, res, next) {
  fileController.upload(req.file, function onUploaded(err, file) {
    res.json(err ? {
      error: 'При загрузке файла произошла ошибка.'
    } : {
      file: file
    });
  });
});

module.exports = router;