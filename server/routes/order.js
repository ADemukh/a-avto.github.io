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

module.exports = router;