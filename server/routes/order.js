/*eslint strict:0  */
var express, responseHelper, router;
var authController, orderController;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');
orderController = require('../controllers/order');
responseHelper = require('../helpers/response');

router.post('/submitneworder', authController.isAuthenticated, function submitorder(req, res) {
  orderController.submitOrder(req.body.order)
    .then(responseHelper(res).success, responseHelper(res).error);
});

router.get('/getOrders', function getOrders(req, res) {
  orderController.getOrders(req.query.filter ? JSON.parse(req.query.filter) : {})
    .then(function onGotOrders(orders) {
      res.json(orders);
    });
});

module.exports = router;