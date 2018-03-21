/* eslint strict:0  */
let Notifications;

Notifications = require('../models/notifications');

function saveNotification(notification) {
    let notificationModel;

    notificationModel = new Notifications({
        name: notification.name,
        type: notification.type,
        forClient: notification.forClient || false,
        forShop: notification.forShop || false,
    });

    return notificationModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${notification.type} is loaded.`);
        }
    });
}

module.exports = {
    addNotification: function addNewNotification(notification) {
        return saveNotification(notification);
    },
    getNotifications: function getNotifications(filter) {
        return Notifications.find(filter).exec();
    },
    deleteNotification: function deleteNotification(id) {
        return Notifications.findOne({
            _id: id,
        }).exec()
            .then(notif => notif.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${notif.id}`);
                }
            }));
    },
    updateNotification: function updateModel(notification) {
        return Notifications.findById({
            _id: notification.id,
        }).exec()
            .then((notif) => {
                notif.name = notification.name;
                notif.type = notification.type;
                notif.forClient = notification.forClient;
                notif.forShop = notification.forShop;

                return notif.save()
                    .then((savedNotification) => {
                        console.log(`${savedNotification.type} is loaded.`);
                    }, (err) => {
                        console.log(err);
                    });
            });
    },
    getNotification: function getNotification(name) {
        return Notifications.findOne({
            name,
        }).exec();
    },
};
