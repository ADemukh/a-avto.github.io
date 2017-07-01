/*eslint strict:0  */
var User, config, fileController, nodemailer;

User = require('../models/user');
config = require('../config');
fileController = require('./file');
nodemailer = require('nodemailer');

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

function changePassword(email, newPassword) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			user.password = newPassword;
			user.passwordHash = user.generateHash(newPassword);
			return saveOrUpdateUser(user);
		});
}

function recoverPassword(email) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			var mailOptions, transporter;

			if (user) {
				transporter = nodemailer.createTransport(config.nodemailer.options);
				mailOptions = {
					from: config.nodemailer.maailFrom,
					to: user.email,
					subject: 'aAvto.by. Востоновление пороля',
					html: 'Ваш пороль ' + user.password + '.'
				};
				return transporter.sendMail(mailOptions);
			}
		})
		.then(function emailSent(result) {
			if (result && result.accepted && result.accepted.length) {
				console.log('Письмо успешно отправлено.');
				return true;
			}
			console.log('Письмо не было оправлено');
			return false;
		})
		.catch(function failed(error) {
			if (error) {
				console.log('Ошибка отправки: ' + error);
				return false;
			}
		});
}

function changePhoto(email, photo) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			var oldPhotoName;

			oldPhotoName = user.photo ? user.photo.fileName : null;
			user.photo = {
				fileName: photo.fileName,
				url: photo.url,
				thumbUrl: 'http://res.cloudinary.com/djydlkoln/image/upload/w_200,h_200,c_thumb/v1498573093/' + photo.fileName + '.' + photo.format
			};
			if (oldPhotoName) {
				return fileController.deleteByFileName(oldPhotoName)
					.then(function success() {
						return saveOrUpdateUser(user);
					});
			}
			return saveOrUpdateUser(user);
		});
}

module.exports = {
	findByEmail: findUserByEmail,
	saveOrUpdate: saveOrUpdateUser,
	changePassword: changePassword,
	recoverPassword: recoverPassword,
	changePhoto: changePhoto
};