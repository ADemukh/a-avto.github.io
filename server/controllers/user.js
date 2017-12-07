/*eslint strict:0  */
var User, bcrypt, config, fileController, mailer, moment, resetEmailHtml;

User = require('../models/user');
config = require('../config');
fileController = require('./file');
mailer = require('./mailer');
moment = require('../moment');
bcrypt = require('bcryptjs');

function findUserByEmail(email) {
	return User.findOne({
			email: email
		}).exec()
		.then(function userFound(user) {
			return user;
		});
}

function findUserByToken(token) {
	return User.findOne({
			'tokens.token': token,
			'tokens.validTill': {
				$gte: moment().format('YYYY-MM-DD HH:mm')
			},
			'tokens.active': true
		}).exec()
		.then(function userFound(user) {
			return user || Promise.reject({
				message: 'Пользователь не найден.'
			});
		});
}

function saveOrUpdateUser(user) {
	return user.save();
}

function changePassword(email, newPassword) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			user.passwordHash = user.generateHash(newPassword);
			return saveOrUpdateUser(user);
		});
}

function recoverPassword(req) {
	return findUserByEmail(req.body.email)
		.then(function addToken(user) {
			var token, validTill;

			validTill = moment().add(24, 'h').format('YYYY-MM-DD HH:mm');
			token = bcrypt.hashSync(validTill, bcrypt.genSaltSync(config.bcrypt.salt));
			user.tokens.push({
				token: token,
				validTill: validTill,
				active: true
			});

			return saveOrUpdateUser(user)
				.then(function onUserSaved(updatedUser) {
					return Promise.resolve(updatedUser, token);
				});
		})
		.then(function sendEmail(user, token) {
			var params, template;

			params = {
				title: 'Востановление пароля для Aavto',
				aavtoUrl: 'aavto.com',
				userName: user.name,
				restorePasswordUrl: 'aavto.com/' + token
			};
			template = require('../templates/recoverEmail')(params);

			return mailer.sendEmail(user.email, 'Aavto.by. Востановление пороля', template);
		})
		.then(function success() {
			return {
				message: 'Письмо оправлено на вашу почту.'
			};
		})
		.catch(function failure() {
			return {
				message: 'Во время выполнения процесса произошла ошибка.'
			};
		});
}

function setPassword(token, password) {
	return findUserByToken(token)
		.then(function foundUser(user) {
			var userToken;

			user.passwordHash = user.generateHash(password);
			userToken = user.tokens.find(function byToken(eachToken) {
				return eachToken.token === token;
			});
			if (userToken) {
				userToken.active = false;
			}
			return saveOrUpdateUser(user);
		});
}

function checkEmailIsFree(email) {
	return findUserByEmail(email)
		.then(function foundUser(user) {
			if (user) {
				return Promise.reject('Пользователь с таким имейлом уже существует.');
			}
			return Promise.resolve('Имейл свободен.');
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
	findByToken: findUserByToken,
	saveOrUpdate: saveOrUpdateUser,
	changePassword: changePassword,
	recoverPassword: recoverPassword,
	setPassword: setPassword,
	checkEmailIsFree: checkEmailIsFree,
	changePhoto: changePhoto
};