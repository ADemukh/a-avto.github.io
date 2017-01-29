/*eslint strict:0  */
var User;

User = require('../models/user');

module.exports = {
	register: function register(user) {
		var userModel;

		userModel = new User({
			email: user.email,
			contactName: user.contactName,
			password: user.password,
			phone: user.phone,
			notifications: user.notifications
		});

		return userModel.save().then(
			function success(resp) {
				return {
					user: resp
				};
			},
			function failure(err) {
				return {
					alert: 'Failed to save user.',
					originalMessage: err
				};
			});
	},
	registerVk: function registerVk(user) {
		var userModel;

		userModel = new User({
				// map properties
		});

		return userModel.save(function onSaved(err) {
			if (err) {
				console.log(err);
			} else {
				console.log('loaded.');
			}
		});
	},
	registerFb: function registerFb(user) {
		var userModel;

		userModel = new User({
				// map properties
		});

		return userModel.save(function onSaved(err) {
			if (err) {
				console.log(err);
			} else {
				console.log('loaded.');
			}
		});
	},
	registerG: function registerG(user) {
		var userModel;

		userModel = new User({
				// map properties
		});

		return userModel.save(function onSaved(err) {
			if (err) {
				console.log(err);
			} else {
				console.log('loaded.');
			}
		});
	},
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