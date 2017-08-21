/*eslint strict:0  */
var express, notificationsController, router;

express = require('express');
router = express.Router();
notificationsController = require('../controllers/notifications');

router.get('/getNotifications', function getNotifications(req, res) {
  notificationsController.getNotifications(req.query.filter ? JSON.parse(req.query.filter) : {})
    .then(function onGotNotifications(notifications) {
      res.json(notifications);
    });
});

router.get('/notifications', function getAllCars(req, res) {
  notificationsController.getNotifications({})
    .then(function gotNotifications(notifications) {
      res.render('notifications/allNotifications', {
        notifications: notifications
      });
    });
});

router.get('/notifications/add', function addNotificationGet(req, res) {
  res.render('notifications/addNotification', {});
});

router.post('/notifications/add', function addNotificationPost(req, res) {
  notificationsController.addNotification({
    name: req.body.name,
    type: req.body.type,
    forClient: req.body.forClient,
    forShop: req.body.forShop
  })
    .then(function redirect() {
      res.redirect('/notifications/notifications');
    });
});

router.post('/notifications/delete', function deleteNotification(req, res) {
  notificationsController.deleteNotification(req.body.id)
    .then(function redirect() {
      res.redirect('/notifications/notifications');
    });
});

router.get('/notifications/:type', function getNotification(req, res) {
  notificationsController.getNotification(req.params.type)
    .then(function gotNotification(notification) {
      res.render('notifications/editNotification', {
        notification: notification
      });
    });
});

router.post('/notifications/:type/edit', function updateNotification(req, res) {
  notificationsController.updateNotification({
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    forClient: req.body.forClient,
    forShop: req.body.forShop
  })
    .then(function redirect() {
      res.redirect('/notifications/notifications');
    });
});

module.exports = router;