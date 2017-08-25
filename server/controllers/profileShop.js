/*eslint strict:0  */
var userController;

userController = require('../controllers/user');

function changePhoto(email, photo) {
	return userController.findUserByEmail(email)
		.then(function foundUser(user) {
			user.photo = photo;
			return userController.saveOrUpdate(user);
		});
}

function changeContactInfo(email, userInfo) {
	return userController.findByEmail(email)
		.then(function foundUser(user) {
			if (userInfo.email !== email) {
				return Promise.reject('Возможность изменить email отсуствует.');
				// return userController.findByEmail(userInfo.email)
				// 	.then(function foundUserWithOtherEmail(otherUser) {
				// 		return Promise.reject('Пользователь с таким email уже существует.');
				// 	}, function notFoundUserWithOtherEmail() {
				// 		return updateContactInfo(user, userInfo);
				// 	});
			}
			return updateContactInfo(user, userInfo);
		});
}

function updateContactInfo(user, newUserContactInfo) {
	user.email = newUserContactInfo.email;
	user.name = newUserContactInfo.name;
	user.phone = newUserContactInfo.phone;
	user.www = newUserContactInfo.www;
	user.about = newUserContactInfo.about;
	user.address = newUserContactInfo.address;
	user.longitude = newUserContactInfo.longitude;
	user.latitude = newUserContactInfo.latitude;
	return userController.saveOrUpdate(user);
}

function changeOptions(email, options) {
	return userController.findByEmail(email)
		.then(function foundUser(user) {
			return updateOptions(user, options);
		});
}

function updateOptions(user, options) {
	user.cities = options.cities;
	user.spareCategories = options.spareCategories;
	user.carMarks = options.carMarks;
	user.schedule = options.schedule;
	user.spare = options.spare;

	return userController.saveOrUpdate(user);
}

function changeNotifications(email, notifications) {
	return userController.findByEmail(email)
		.then(function foundUser(user) {
			return updateNotification(user, notifications);
		});
}

function updateNotification(user, notifications) {
	user.notifications = notifications;
	
	return userController.saveOrUpdate(user);
}

module.exports = {
	changePhoto: changePhoto,
	changeContactInfo: changeContactInfo,
	changeOptions: changeOptions,
	changeNotifications: changeNotifications
};