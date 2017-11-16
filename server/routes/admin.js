/*eslint strict:0  */
var express, router;

express = require('express');
router = express.Router();
router.get('/', function getCities(req, res) {
  res.render('admin');
});
module.exports = router;