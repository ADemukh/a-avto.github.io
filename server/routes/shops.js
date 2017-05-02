/*eslint strict:0  */
var express, router, shopController;

express = require('express');
router = express.Router();
shopController = require('../controllers/shop');


router.get('/getShops', function getShops(req, res) {
  shopController.getShops({})
    .then(function onGotShops(shops) {
      res.json(shops);
    });
});

module.exports = router;