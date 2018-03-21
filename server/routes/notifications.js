/* eslint strict:0  */
let express,
    notificationsController,
    router;

express = require('express');

router = express.Router();
notificationsController = require('../controllers/notifications');

router.get('/getNotifications', (req, res) => {
    notificationsController.getNotifications(req.query.filter ? JSON.parse(req.query.filter) : {})
        .then((notifications) => {
            res.json(notifications);
        });
});

router.get('/', (req, res) => {
    notificationsController.getNotifications({})
        .then((notifications) => {
            res.render('notifications/allNotifications', {
                notifications,
            });
        });
});
router.get('/notifications/add', (req, res) => {
    res.render('notifications/addNotification', {});
});

router.post('/notifications/add', (req, res) => {
    notificationsController.addNotification({
        name: req.body.name,
        type: req.body.type,
        forClient: req.body.forClient,
        forShop: req.body.forShop,
    })
        .then(() => {
            res.redirect('/notifications/notifications');
        });
});

router.post('/notifications/delete', (req, res) => {
    notificationsController.deleteNotification(req.body.id)
        .then(() => {
            res.redirect('/notifications/notifications');
        });
});

router.get('/notifications/:type', (req, res) => {
    notificationsController.getNotification(req.params.type)
        .then((notification) => {
            res.render('notifications/editNotification', {
                notification,
            });
        });
});

router.post('/notifications/:type/edit', (req, res) => {
    notificationsController.updateNotification({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        forClient: req.body.forClient,
        forShop: req.body.forShop,
    })
        .then(() => {
            res.redirect('/notifications/notifications');
        });
});

module.exports = router;
