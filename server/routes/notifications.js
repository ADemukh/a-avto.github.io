var notificationsController, express, router;

express = require('express');
router = express.Router();
notificationsController = require('../controllers/notifications');

router.get('/getNotifications', function getNotifications(req, res) {
  notificationsController.getNotifications({})
    .then(function onGotNotifications(notifications) {
      res.json(notifications);
    });
});

module.exports = router;