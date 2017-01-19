/*eslint strict:0  */
var User, mongoose;

User = require('../models/user');
mongoose = require('mongoose');

module.exports = {
	register: function register(user) {
		var userModel;

		userModel = new User({
			userId: new mongoose.Types.ObjectId(),
			email: user.email,
			contactName: user.contactName,
			password: user.password,
			phone: user.phone,
			notifications: user.notifications
		});

		return userModel.save().then(function success(resp) {
			return resp.userId.toString();
		});
	},
	registerVk: function registerVk(user) {
		var userModel;

		userModel = new User({
			userId: new mongoose.Types.ObjectId()
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
			userId: new mongoose.Types.ObjectId()
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
			userId: new mongoose.Types.ObjectId()
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
			User.find({ userId: userId }).exec()
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
