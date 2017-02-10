/*eslint strict:0  */
var User;

User = require('../models/user');

function findUserByEmail(email) {
	return User.findOne({
			email: email
		}).exec()
		.then(function userFound(user) {
			return user || Promise.reject('Пользователь не найден.');
		});
}

function saveOrUpdateUser(user) {
	return user.save();
}

function changeUserPassword(email, newPassword) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			user.password = newPassword;
			user.passwordHash = newPassword;
			return saveOrUpdateUser(user);
		});
}

function loadPhoto(email, photo) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			user.photo = photo;
			return saveOrUpdateUser(user);
		});
}

module.exports = {
	findByEmail: findUserByEmail,
	saveOrUpdate: saveOrUpdateUser,
	changePassword: changeUserPassword,
	loadPhoto: loadPhoto
};