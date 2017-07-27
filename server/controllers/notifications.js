var Notifications, notificationsInitialCollection;

Notifications = require('../models/notifications');

function saveNotification(notification) {
	var notificationModel;

	notificationModel = new Notifications({
		name: notification.name,
		type: notification.type,
		forClient: notification.forClient || false,
		forShop: notification.forShop || false
	});

	return notificationModel.save(function save(err) {
		if (err) {
			console.log(err);
		} else {
			console.log(notification.type + ' is loaded.');
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
	deleteNotification: function deleteNotification(type) {
		return Notifications.findOne({
			type: type
		}).exec()
			.then(function foundNotification(notif) {
				return notif.remove(function success(err) {
					if (err) {
						console.log(err);
					} else {
						console.log('DELETE removing ID: ' + notif.id);
					}
				});
			});
	},
	updateNotification: function updateModel(notification) {
		return Notifications.findById({
			_id: notification.id
		}).exec()
			.then(function foundCar(notif) {
				notif.name = notification.name;
				notif.type = notification.type;
				notif.forClient = notification.forClient;
				notif.forShop = notification.forShop;

				return notif.save()
					.then(function success(savedNotification) {
						console.log(savedNotification.type + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
	},
	getNotification: function getNotification(type) {
		return Notifications.findOne({
			type: type
		}).exec();
	}
};