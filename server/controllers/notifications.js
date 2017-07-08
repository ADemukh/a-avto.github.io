var Notifications, notificationsInitialCollection;

Notifications = require('../models/notifications');


module.exports = {
	getNotifications: function getNotifications(filter) {
		return Notifications.find(filter).exec();
	}
};