const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth');
const orderController = require('../controllers/order');
const responseHelper = require('../helpers/response');
const profileClientController = require('../controllers/profileClient');

router.post('/submitneworder', authController.isAuthenticated, (req, res) => {
    profileClientController.submitClientOrder(req.body.order)
        .then(responseHelper(res).success, responseHelper(res).error);
});

router.get('/getOrders', (req, res) => {
    orderController.getOrders(req.query.filter ? JSON.parse(req.query.filter) : {})
        .then((orders) => {
            res.json(orders);
        });
});

router.get('/getOrderById', (req, res) => {
    profileClientController.getOrderById(req.query.id)
        .then(order => res.json(order));
});

module.exports = router;
