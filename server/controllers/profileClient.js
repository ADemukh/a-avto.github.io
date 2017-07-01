/*eslint strict:0  */
var userController;

userController = require('../controllers/user');

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
	return userController.saveOrUpdate(user);
}

function changeNotifications(email, notifications) {
	return userController.findByEmail(email)
		.then(function foundUser(user) {
			user.notifications = notifications;
			return userController.saveOrUpdate(user);
		});
}

function changeCars(email, cars) {
	return userController.findByEmail(email)
		.then(function foundUser(user) {
			user.cars = cars;
			return userController.saveOrUpdate(user);
		});
}

module.exports = {
	changeContactInfo: changeContactInfo,
	changeNotifications: changeNotifications,
	changeCars: changeCars
};