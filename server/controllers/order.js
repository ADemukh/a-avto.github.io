/*eslint strict:0  */
var Order, profileClientController;

Order = require('../models/order');
profileClientController = require('./profileClient');

function submitOrder(orderInfo) {
	var car, orderModel;

	car = orderInfo.car.selected._id === orderInfo.car.newCar._id ?
		orderInfo.car.newCar :
		orderInfo.car.selected;
	delete car._id;

	orderModel = new Order({
		title: orderInfo.details.title,
		description: orderInfo.details.description,
		spareType: orderInfo.details.spareType,
		car: car,
		client: orderInfo.contacts,
		wantedList: orderInfo.wantedList
	});

	return orderModel.save()
		.then(function onSuccess() {
			if (car.needSave) {
				return profileClientController.addNewCar(orderInfo.contacts.email, orderInfo.car.newCar);
			}
		})
		.catch(function onFailure(err) {

		});
}

module.exports = {
	submitOrder: submitOrder
};