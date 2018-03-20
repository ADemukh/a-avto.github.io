/*eslint strict:0  */
var Order, OrderShopDialog, userController;

Order = require('../models/order');
OrderShopDialog = require('../models/orderShopDialog');
userController = require('./user');

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
	user.address = newUserContactInfo.address;
	user.city = newUserContactInfo.city;
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

function addNewCar(email, newCar) {
	return userController.findByEmail(email)
		.then(function foundUser(user) {
			delete newCar._id;
			user.cars.push(newCar);
			return userController.saveOrUpdate(user);
		});
}

function getOrders(filter, email, user) {
	var orders;

	// return Order.find({ 'client.user': user }).exec()
	// 	.then(function setOrdersResult(results) {
	// 		orders = results;
	// 	})
	// 	.then(function fetchUnseenOrderMessages() {
	// 		return OrderShopDialog
	// 			.find({
	// 				'messages.seen': false,
	// 				'messages.author'
	// 			})
	// 			.where('messages')
	// 			.exec();
	// 	})
	// 	.then(function setOrderDialogsResult(results) {
	// 		return orders;
	// 	})

	return Order.find({
			'client.user': user
		})
		.populate({
			path: 'dialogs',
			select: 'messages',
			// match: {

			// }
		})
		.exec()
		.then(function setOrdersResult(results) {
			return results;
		})
		.catch(function onError(err) {
			return err;
		});
}

module.exports = {
	changeContactInfo: changeContactInfo,
	changeNotifications: changeNotifications,
	changeCars: changeCars,
	addNewCar: addNewCar,
	getOrders: getOrders
};