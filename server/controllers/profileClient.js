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

function getOrders(email) {
	return Promise.resolve([{
		title: 'Проект дома',
		description: 'Нужен проект дома по реконструкции, за умеренную цену',
		cities: ['Минск']
	}, {
		title: 'Квартирный переезд (1 комната) с Есенина на Белинского',
		description: `Грузоперевозки
Доброго времени суток.
В воскресенье 27 августа в 14:00 необходимо вынести и погрузить вещи, 1 комната (Есенина д 23 корп 1, этаж 6, лифт маленький пассажирский):
- двуспальная кровать (будет разобрана)
- двуспальный матрас
- трехстворчатый шкаф (будет разобран)
- письменный стол
- полка
- туалетный стол
- 2 тумбочки
- 2 комода
- сундук
- стул, табурет, зеркало
- несколько чемоданов с одеждой
- коробки с вещами (посуда и всякое) - 15-20
- мешки с вещами
- 2 велосипеда
- СВЧ
- книги, коробки с обувью и прочее небольшое
Привезти на Белинского 23 и поднять в квартиру (11 этаж, есть лифт большой грузовой).

Предложите, пожалуйста, вашу цену за все "под ключ".`,
		cities: ['Минск']
	}]);
}

module.exports = {
	changeContactInfo: changeContactInfo,
	changeNotifications: changeNotifications,
	changeCars: changeCars,
	getOrders: getOrders
};