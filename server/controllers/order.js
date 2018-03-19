/*eslint strict:0  */
var Message, Order, OrderShopDialog, mongoose, profileClientController;

mongoose = require('mongoose');
Order = require('../models/order');
OrderShopDialog = require('../models/orderShopDialog');
Message = require('../models/message');
profileClientController = require('./profileClient');

function submitOrder(orderInfo) {
	var car, dialogs, orderId, orderModel;

	car = orderInfo.car.selected._id === orderInfo.car.newCar._id ?
		orderInfo.car.newCar :
		orderInfo.car.selected;
	delete car._id;

	orderId = new mongoose.Types.ObjectId();

	dialogs = orderInfo.shops.map(function createDialog(shop) {
		return new OrderShopDialog({
			_id: new mongoose.Types.ObjectId(),
			order: orderId,
			shop: shop,
			messages: [getFirstMessage(orderInfo)]
		});
	});

	orderModel = new Order({
		_id: orderId,
		title: orderInfo.details.title,
		description: orderInfo.details.description,
		spare: {
			isNewDetail: orderInfo.details.spare.isNewDetail,
			isUsedDetail: orderInfo.details.spare.isUsedDetail
		},
		spareType: orderInfo.details.spareType,
		resolutionDate: orderInfo.details.resolutionDate,
		client: {
			user: orderInfo.client,
			car: car,
			contacts: orderInfo.contacts
		},
		wantedList: orderInfo.wantedList
	});

	dialogs.forEach(function pushDialog(dialog) {
		orderModel.dialogs.push(dialog);
	});

	return orderModel.save()
		.then(function bulkInserDialogs() {
			return OrderShopDialog.insertMany(dialogs);
		})
		.then(function saveNewCar() {
			if (car.needSave) {
				return profileClientController.addNewCar(orderInfo.contacts.email, orderInfo.car.newCar);
			}
		})
		.catch(function onFailure(err) {

		});
}

function getFirstMessage(orderInfo) {
	return new Message({
		author: orderInfo.client._id,
		content: 'First message'
	});
}

function getOrders(filter) {
	var orderFilter;

	orderFilter = {};
	if (filter.orderCity) {
		orderFilter['client.contacts.city'] = {
			$in: [filter.orderCity]
		};
	}
	if (filter.carMark) {
		orderFilter['client.car.mark'] = {
			$in: [filter.carMark]
		};
	}
	if (filter.spareType) {
		orderFilter.spareType = {
			$in: [filter.spareType]
		};
	}

	if (filter.maxResolutionDate) {
		orderFilter.resolutionDate = {
			$lte: filter.maxResolutionDate
		};
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