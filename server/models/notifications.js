var Notifications, mongoose;

mongoose = require('mongoose');

Notifications = mongoose.model('Notifications', {
		name: String,
        type: String,
		forClient: Boolean,
        forShop: Boolean
});

module.exports = Notifications;