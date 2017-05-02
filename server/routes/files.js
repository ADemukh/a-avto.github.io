/*eslint strict:0  */
var express, fileController, multer, router, upload;

express = require('express');
router = express.Router();
multer  = require('multer');
upload = multer({ dest: 'public/uploads' });
fileController = require('../controllers/file');

router.post('/upload', upload.single('file'), function uploadFn(req, res, next) {
    var fileInfo, srcUrl;

    console.log('Upload Successful ', req.file, req.body);
    fileInfo = fileController.getFileInfo(req.file);
    srcUrl = fileController.getSrcUrl(fileInfo.fileName);
    res.json({
      fileInfo: fileInfo,
      scrUrl: srcUrl
    });
});

module.exports = router;
