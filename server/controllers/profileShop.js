const OrderShopDialog = require('../models/orderShopDialog');
const userController = require('../controllers/user');

function changePhoto(email, photo) {
    return userController.findUserByEmail(email)
        .then((user) => {
            user.photo = photo;
            return userController.saveOrUpdate(user);
        });
}

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
    user.www = newUserContactInfo.www;
    user.about = newUserContactInfo.about;
    user.address = newUserContactInfo.address;
    user.longitude = newUserContactInfo.longitude;
    user.latitude = newUserContactInfo.latitude;
    return userController.saveOrUpdate(user);
}

function changeOptions(email, options) {
    return userController.findByEmail(email)
        .then(user => updateOptions(user, options));
}

function updateOptions(user, options) {
    user.cities = options.cities;
    user.spareTypes = options.spareTypes;
    user.carMarks = options.carMarks;
    user.schedule = options.schedule;
    user.spare = options.spare;

    return userController.saveOrUpdate(user);
}

function changeNotifications(email, notifications) {
    return userController.findByEmail(email)
        .then(user => updateNotification(user, notifications));
}

function updateNotification(user, notifications) {
    user.notifications = notifications;

    return userController.saveOrUpdate(user);
}

function getShopDialogs(shopId) {
    return OrderShopDialog.find({ shop: shopId })
        .populate({
            path: 'lastMessage messages user',
            populate: {
                path: 'author',
                select: 'name',
            },
        })
        .exec()
        .then(results => results)
        .catch(err => err);
}

module.exports = {
    changePhoto,
    changeContactInfo,
    changeOptions,
    changeNotifications,
    getShopDialogs,
};
