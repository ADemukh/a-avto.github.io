const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth');
const userController = require('../controllers/user');
const profileClientController = require('../controllers/profileClient');
const profileShopController = require('../controllers/profileShop');
const responseHelper = require('../helpers/response');

router.post('/changepassword', authController.isAuthenticated, (req, res) => {
    userController.changePassword(req.body.email, req.body.newPassword)
        .then(responseHelper(res).success, responseHelper(res).error);
});

// client profile
router.post('/changeclientphoto', authController.isAuthenticated, (req, res) => {
    userController.changePhoto(req.body.email, req.body.photo)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeclientcontactinfo', authController.isAuthenticated, (req, res) => {
    profileClientController.changeContactInfo(req.body.email, req.body.contactInfo)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeclientnotifications', authController.isAuthenticated, (req, res) => {
    profileClientController.changeNotifications(req.body.email, req.body.notifications)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeclientcars', authController.isAuthenticated, (req, res) => {
    profileClientController.changeCars(req.body.email, req.body.cars)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/getclientorders', authController.isAuthenticated, (req, res) => {
    profileClientController.getOrders(req.body.filter, req.body.email, req.body.id)
        .then((orders) => {
            res.json(orders);
        });
});
router.post('/getorderdialogs', authController.isAuthenticated, (req, res) => {
    profileClientController.getOrderDialogs(req.body.id)
        .then((dialogs) => {
            res.json(dialogs);
        });
});
router.post('/client/getorderdialogbyid', authController.isAuthenticated, (req, res) => {
    profileClientController.getOrderDialogById(req.body.id)
        .then((dialog) => {
            res.json(dialog);
        });
});

// shop profile
router.post('/changeshopphoto', authController.isAuthenticated, (req, res) => {
    userController.changePhoto(req.body.email, req.body.photo)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeshopcontactinfo', authController.isAuthenticated, (req, res) => {
    profileShopController.changeContactInfo(req.body.email, req.body.contactInfo)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeshopoptions', authController.isAuthenticated, (req, res) => {
    profileShopController.changeOptions(req.body.email, req.body.options)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/changeshopnotifications', authController.isAuthenticated, (req, res) => {
    profileShopController.changeNotifications(req.body.email, req.body.notifications)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/getshopdialogs', authController.isAuthenticated, (req, res) => {
    profileShopController.getShopDialogs(req.body.id)
        .then((dialogs) => {
            res.json(dialogs);
        });
});
router.post('/shop/getorderdialogbyid', authController.isAuthenticated, (req, res) => {
    profileShopController.getOrderDialogById(req.body.id)
        .then((dialog) => {
            res.json(dialog);
        });
});

module.exports = router;
