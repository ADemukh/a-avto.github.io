const Order = require('../models/order');
// const OrderShopDialog = require('../models/orderShopDialog');
const userController = require('./user');
const orderService = require('../services/order.service');

function changeContactInfo(email, userInfo) {
    return userController.findByEmail(email)
        .then((user) => {
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
        .then((user) => {
            user.notifications = notifications;
            return userController.saveOrUpdate(user);
        });
}

function changeCars(email, cars) {
    return userController.findByEmail(email)
        .then((user) => {
            user.cars = cars;
            return userController.saveOrUpdate(user);
        });
}

function addNewCar(email, newCar) {
    return userController.findByEmail(email)
        .then((user) => {
            delete newCar._id;
            user.cars.push(newCar);
            return userController.saveOrUpdate(user);
        });
}

function getOrders(filter, email, user) {
    return Order.find({
        'client.user': user,
    })
        .populate({
            path: 'dialogs',
            select: 'messages',
            populate: {
                path: 'messages',
                options: {
                    // limit: 1,
                },
            },
        })
        .exec()
        .then(results => results)
        .catch(err => err);
}

function submitClientOrder(orderInfo) {
    return orderService.submitClientOrder(orderInfo);
}

module.exports = {
    changeContactInfo,
    changeNotifications,
    changeCars,
    addNewCar,
    getOrders,
    submitClientOrder,
};
