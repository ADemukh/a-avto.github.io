/*eslint strict:0  */
var express, router;
var authController, profileClientController, profileShopController, responseHelper, userController;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');
userController = require('../controllers/user');
profileClientController = require('../controllers/profileClient');
profileShopController = require('../controllers/profileShop');
responseHelper = require('../helpers/response');

router.post('/changepassword', authController.isAuthenticated, function changePassword(req, res) {
  userController.changePassword(req.body.email, req.body.newPassword)
    .then(responseHelper(res).success, responseHelper(res).error);
});

// client profile
router.post('/changeclientphoto', authController.isAuthenticated, function changeClientPhoto(req, res) {
  userController.changePhoto(req.body.email, req.body.photo)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeclientcontactinfo', authController.isAuthenticated, function changeClientContactInfo(req, res) {
  profileClientController.changeContactInfo(req.body.email, req.body.contactInfo)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeclientnotifications', authController.isAuthenticated, function changeClientNotifications(req, res) {
  profileClientController.changeNotifications(req.body.email, req.body.notifications)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeclientcars', authController.isAuthenticated, function changeClientCars(req, res) {
  profileClientController.changeCars(req.body.email, req.body.cars)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/getclientorders', authController.isAuthenticated, function changeClientCars(req, res) {
  profileClientController.getOrders(req.body.filter, req.body.email)
    .then(function gotOrders(orders) {
      res.json({
        orders: orders
      });
    });
});

// shop profile
router.post('/changeshopphoto', authController.isAuthenticated, function changeUserPhoto(req, res) {
  userController.changePhoto(req.body.email, req.body.photo)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeshopcontactinfo', authController.isAuthenticated, function changeShopContactInfo(req, res) {
  profileShopController.changeContactInfo(req.body.email, req.body.contactInfo)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeshopoptions', authController.isAuthenticated, function changeShopOptions(req, res) {
  profileShopController.changeOptions(req.body.email, req.body.options)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeshopnotifications', authController.isAuthenticated, function changeShopNotifications(req, res) {
  profileShopController.changeNotifications(req.body.email, req.body.notifications)
    .then(responseHelper(res).success, responseHelper(res).error);
});

module.exports = router;