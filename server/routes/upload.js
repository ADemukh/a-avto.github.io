/*eslint strict:0  */
var express, fileController, router;

express = require('express');
router = express.Router();
fileController = require('../controllers/file');

router.get('/image', function getImage(req, res) {
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Image: <input type="file" name="image"/></p>'
    + '<p><input type="submit" value="Upload"/></p>'
    + '</form>');
});

router.post('/image', fileController.uploadSingleImage,  fileController.onUploadSingleImage);

module.exports = router;