var NotificationsSchema, mongoose;

mongoose = require('mongoose');
NotificationsSchema = require('./schemas/notifications');

module.exports = mongoose.model('Notifications', NotificationsSchema);