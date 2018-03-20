/*eslint strict:0  */
var express, router;

express = require('express');
router = express.Router();

router.get('/', function index(req, res) {
  res.sendFile('../../.build/index.html');
});

router.use('/init', require('./inits'));
router.use('/admin', require('./admin'));
router.use('/auth', require('./auth'));
router.use('/cars', require('./cars'));
router.use('/cities', require('./cities'));
router.use('/notifications', require('./notifications'));
router.use('/profile', require('./profile'));
router.use('/questionAnswer', require('./questionAnswer'));
router.use('/shops', require('./shops'));
router.use('/upload', require('./upload'));
router.use('/order', require('./order'));

module.exports = router;