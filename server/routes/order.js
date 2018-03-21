/* eslint strict:0  */
let express,
    responseHelper,
    router;
let authController,
    orderController;

express = require('express');

router = express.Router();
authController = require('../controllers/auth');
orderController = require('../controllers/order');
responseHelper = require('../helpers/response');

router.post('/submitneworder', authController.isAuthenticated, (req, res) => {
    orderController.submitOrder(req.body.order)
        .then(responseHelper(res).success, responseHelper(res).error);
});

router.get('/getOrders', (req, res) => {
    orderController.getOrders(req.query.filter ? JSON.parse(req.query.filter) : {})
        .then((orders) => {
            res.json(orders);
        });
});

module.exports = router;
