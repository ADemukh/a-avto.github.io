/*eslint strict:0  */
var User;

User = require('../models/user');

module.exports = {
	changePassword: function changePassword(userId, newPassword) {
		// find user by id and change user password hash
	},
	loadPhoto: function loadPhoto(userId, photo) {
		User.find({
				userId: userId
			}).exec()
			.then(function success(user) {
				user.photo = {
					photoId: photo.fileName,
					originalName: photo.originalName,
					extension: photo.extension,
					destination: photo.destination
				};
				return user.save().exec();
			});
	}
};