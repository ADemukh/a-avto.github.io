/*eslint strict:0  */
var express, router;
var authController, orderController;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');
orderController = require('../controllers/order');

function succeedWrapper(res, message) {
  return function succeed(response) {
    res.json({
      success: true,
      message: message,
      details: response
    });
  };
}

function failureWrapper(res, error) {
  return function failure(err) {
    res.json({
      success: false,
      error: error,
      details: err
    });
  };
}

router.post('/submitneworder', authController.isAuthenticated, function submitorder(req, res) {
  orderController.submitOrder(req.body.order)
    .then(succeedWrapper(res, 'Success.'), failureWrapper(res, 'Error.'));
});

router.get('/getOrders', function getOrders(req, res) {
  orderController.getOrders(req.query.filter ? JSON.parse(req.query.filter) : {})
    .then(function onGotOrders(orders) {
      res.json(orders);
    });
});

module.exports = router;