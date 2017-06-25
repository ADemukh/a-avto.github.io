/*eslint strict:0  */
var express, router, uploadController;

express = require('express');
router = express.Router();
uploadController = require('../controllers/upload');

router.get('/image', function getImage(req, res) {
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Image: <input type="file" name="image"/></p>'
    + '<p><input type="submit" value="Upload"/></p>'
    + '</form>');
});

router.post('/image', uploadController.uploadSingleImage,  uploadController.onUploadSingleImage);

module.exports = router;