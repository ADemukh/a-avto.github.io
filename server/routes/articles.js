var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads' });
var articleController = require('../controllers/article');
var uploaderController = require('../controllers/uploader');

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'articles' });
});

router.post('/add', upload.single('picture'), function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  var imageinfo = uploaderController.getFileInfo(req.file);
  articleController.addArticle({
    title: req.body.title,
    text: req.body.text,
    image: imageinfo
  });
  res.render('addedArticle', {
    title: req.body.title,
    text: req.body.text,
    imagePath: 'http://localhost:3000/uploads/' + imageinfo.fileName + imageinfo.extension
  });
});

module.exports = router;
