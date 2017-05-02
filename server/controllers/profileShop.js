/*eslint strict:0  */
var userController;

userController = require('../controllers/user');

function changePhoto(email, photo) {
	return userController.findUserByEmail(email)
		.then(function foundUser(user) {
			user.photo = photo;
			return userController.saveOrUpdateUser(user);
		});
}

function changeContactInfo(email, userInfo) {
	return userController.findUserByEmail(email)
		.then(function foundUser(user) {
			if (userInfo.email !== email) {
				return userController.findUserByEmail(userInfo.email)
					.then(function foundUserWithOtherEmail(otherUser) {
						return Promise.reject('Пользователь с таким email уже существует.');
					}, function notFoundUserWithOtherEmail() {
						return updateContactInfo(user, userInfo);
					});
			}
			return updateContactInfo(user, userInfo);
		});
}

function updateContactInfo(user, newUserContactInfo) {
	user.email = newUserContactInfo.email;
	user.name = newUserContactInfo.name;
	user.phone = newUserContactInfo.phone;
	return userController.saveOrUpdateUser(user);
}

function changeNotifications(email, notifications) {
	return userController.findUserByEmail(email)
		.then(function foundUser(user) {
			user.notifications = notifications;
			return userController.saveOrUpdateUser(user);
		});
}

function changeCars(email, cars) {
	return userController.findUserByEmail(email)
		.then(function foundUser(user) {
			user.cars = cars;
			return userController.saveOrUpdateUser(user);
		});
}

module.exports = {
	changePhoto: changePhoto,
	changeContactInfo: changeContactInfo,
	changeNotifications: changeNotifications,
	changeCars: changeCars
};