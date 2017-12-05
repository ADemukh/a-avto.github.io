/*eslint strict:0  */
var Order, moment, profileClientController;

moment = require('../moment');
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
		spare: {
			isNewDetail: orderInfo.details.spare.isNewDetail,
			isUsedDetail: orderInfo.details.spare.isUsedDetail
		},
		spareType: orderInfo.details.spareType,
		resolutionDate: orderInfo.details.resolutionDate,
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

function getOrders(filter) {
	var orderFilter;

	orderFilter = {};
	if (filter.orderCity) {
		orderFilter['client.city'] = { $in: [filter.orderCity] };
	}
	if (filter.carMark) {
		orderFilter['car.mark'] = { $in: [filter.carMark] };
	}
	if (filter.spareType) {
		orderFilter.spareType = { $in: [filter.spareType] };
	}

	if (filter.maxResolutionDate) {
		orderFilter.resolutionDate = { $lte: filter.maxResolutionDate };
	}

	if (filter.newDetail && !filter.usedDetail) {
		orderFilter['spare.isNewDetail'] = true;
	}
	if (filter.usedDetail && !filter.newDetail) {
		orderFilter['spare.isUsedDetail'] = true;
	}

	// if (filter.worksNow) {
	// 	currentDay = moment().format('dddd').toLowerCase();
	// 	currentTime = moment().format('HH:mm');
	// 	orderFilter['schedule.' + currentDay + '.active'] = true;
	// 	orderFilter['schedule.' + currentDay + '.from'] = { $lte: currentTime };
	// 	orderFilter['schedule.' + currentDay + '.to'] = { $gte: currentTime };
	// }
	// if (filter.worksOnWeekend) {
	// 	orderFilter.$or = [
	// 		{ 'schedule.saturday.active': true },
	// 		{ 'schedule.sunday.active': true }
	// 	];
	// }
	return Order.find(orderFilter).exec();
}

module.exports = {
	submitOrder: submitOrder,
	getOrders: getOrders
};