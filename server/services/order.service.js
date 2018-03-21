// const mongoose = require('mongoose');
// const Order = require('../models/order');
// const OrderShopDialog = require('../models/orderShopDialog');
// const Message = require('../models/message');
// const profileClientController = require('./profileClient');

// function submitClientOrder(orderInfo) {
//     const car = getOrderCar(orderInfo);
//     const orderId = new mongoose.Types.ObjectId();

//     const orderShopDialogs = getOrderDialogs(orderInfo, orderId);

//     orderModel = new Order({
//         _id: orderId,
//         title: orderInfo.details.title,
//         description: orderInfo.details.description,
//         spare: {
//             isNewDetail: orderInfo.details.spare.isNewDetail,
//             isUsedDetail: orderInfo.details.spare.isUsedDetail,
//         },
//         spareType: orderInfo.details.spareType,
//         resolutionDate: orderInfo.details.resolutionDate,
//         client: {
//             user: orderInfo.client,
//             car,
//             contacts: orderInfo.contacts,
//         },
//         wantedList: orderInfo.wantedList,
//     });

//     dialogs.forEach((dialog) => {
//         orderModel.dialogs.push(dialog);
//     });

//     return orderModel.save()
//         .then(() => OrderShopDialog.insertMany(dialogs))
//         .then(() => {
//             if (car.needSave) {
//                 return profileClientController.addNewCar(orderInfo.contacts.email, orderInfo.car.newCar);
//             }
//         })
//         .catch((err) => {

//         });
// }

// function getOrderCar(orderInfo) {
//     const car = orderInfo.car.selected._id === orderInfo.car.newCar._id ?
//         orderInfo.car.newCar :
//         orderInfo.car.selected;
//     delete car._id;

//     return car;
// }

// function getOrderDialogs(orderInfo, orderId) {
//     return orderInfo.shops.map(shop => new OrderShopDialog({
//         _id: new mongoose.Types.ObjectId(),
//         order: orderId,
//         shop,
//         messages: [getFirstMessage(orderInfo)],
//     }));
// }

// function getFirstOrderMessage(orderInfo) {
//     return new Message({
//         author: orderInfo.client,
//         content: 'First message',
//     });
// }

// function getOrders(filter) {
//     let orderFilter;

//     orderFilter = {};
//     if (filter.orderCity) {
//         orderFilter['client.contacts.city'] = {
//             $in: [filter.orderCity],
//         };
//     }
//     if (filter.carMark) {
//         orderFilter['client.car.mark'] = {
//             $in: [filter.carMark],
//         };
//     }
//     if (filter.spareType) {
//         orderFilter.spareType = {
//             $in: [filter.spareType],
//         };
//     }

//     if (filter.maxResolutionDate) {
//         orderFilter.resolutionDate = {
//             $lte: filter.maxResolutionDate,
//         };
//     }

//     if (filter.newDetail && !filter.usedDetail) {
//         orderFilter['spare.isNewDetail'] = true;
//     }
//     if (filter.usedDetail && !filter.newDetail) {
//         orderFilter['spare.isUsedDetail'] = true;
//     }

//     // if (filter.worksNow) {
//     // 	currentDay = moment().format('dddd').toLowerCase();
//     // 	currentTime = moment().format('HH:mm');
//     // 	orderFilter['schedule.' + currentDay + '.active'] = true;
//     // 	orderFilter['schedule.' + currentDay + '.from'] = { $lte: currentTime };
//     // 	orderFilter['schedule.' + currentDay + '.to'] = { $gte: currentTime };
//     // }
//     // if (filter.worksOnWeekend) {
//     // 	orderFilter.$or = [
//     // 		{ 'schedule.saturday.active': true },
//     // 		{ 'schedule.sunday.active': true }
//     // 	];
//     // }
//     return Order.find(orderFilter).exec();
// }

// module.exports = {
//     submitClientOrder,
//     getClientOrders,
//     getClientOrderShops,
//     getClientOrderShopMessages,
//     getShopOrders,
//     getShopOrderMessages,
// };
