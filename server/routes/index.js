/*eslint strict:0  */
var express, router;

express = require('express');
router = express.Router();

/* GET home page. */
router.get('/', function index(req, res, next) {
  res.sendFile('../../.build/index.html');
});

module.exports = router;