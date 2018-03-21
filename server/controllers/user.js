const User = require('../models/user');
const config = require('../config');
const fileController = require('./file');
const mailer = require('./mailer');
const moment = require('../moment');
const bcrypt = require('bcryptjs');

const recoverEmailTemplate = require('../templates/recoverEmail');

function findUserByEmail(email) {
    return User.findOne({
        email,
    }).exec()
        .then(user => user);
}

function findUserByToken(token) {
    return User.findOne({
        'tokens.token': token,
        'tokens.validTill': {
            $gte: moment().format('YYYY-MM-DD HH:mm'),
        },
        'tokens.active': true,
    }).exec()
        .then(user => user || Promise.reject({
            message: 'Пользователь не найден.',
        }));
}

function saveOrUpdateUser(user) {
    return user.save();
}

function changePassword(email, newPassword) {
    return findUserByEmail(email)
        .then((user) => {
            user.passwordHash = user.generateHash(newPassword);
            return saveOrUpdateUser(user);
        });
}

function recoverPassword(req) {
    return findUserByEmail(req.body.email)
        .then((user) => {
            const validTill = moment().add(24, 'h').format('YYYY-MM-DD HH:mm');
            const token = bcrypt.hashSync(validTill, bcrypt.genSaltSync(config.bcrypt.salt));
            user.tokens.push({
                token,
                validTill,
                active: true,
            });

            return saveOrUpdateUser(user)
                .then(updatedUser => Promise.resolve(updatedUser, token));
        })
        .then((user, token) => {
            const params = {
                title: 'Востановление пароля для Aavto',
                aavtoUrl: 'aavto.com',
                userName: user.name,
                restorePasswordUrl: `aavto.com/${token}`,
            };
            const template = recoverEmailTemplate(params);

            return mailer.sendEmail(user.email, 'Aavto.by. Востановление пороля', template);
        })
        .then(() => ({
            message: 'Письмо оправлено на вашу почту.',
        }))
        .catch(() => ({
            message: 'Во время выполнения процесса произошла ошибка.',
        }));
}

function setPassword(token, password) {
    return findUserByToken(token)
        .then((user) => {
            user.passwordHash = user.generateHash(password);
            const userToken = user.tokens.find(eachToken => eachToken.token === token);
            if (userToken) {
                userToken.active = false;
            }
            return saveOrUpdateUser(user);
        });
}

function checkEmailIsFree(email) {
    return findUserByEmail(email)
        .then((user) => {
            if (user) {
                return Promise.reject('Пользователь с таким имейлом уже существует.');
            }
            return Promise.resolve('Имейл свободен.');
        });
}

function changePhoto(email, photo) {
    return findUserByEmail(email)
        .then((user) => {
            const oldPhotoName = user.photo ? user.photo.fileName : null;
            user.photo = {
                fileName: photo.fileName,
                url: photo.url,
                thumbUrl: `http://res.cloudinary.com/djydlkoln/image/upload/w_200,h_200,c_thumb/v1498573093/${photo.fileName}.${photo.format}`,
            };
            if (oldPhotoName) {
                return fileController.deleteByFileName(oldPhotoName)
                    .then(() => saveOrUpdateUser(user));
            }
            return saveOrUpdateUser(user);
        });
}

module.exports = {
    findByEmail: findUserByEmail,
    findByToken: findUserByToken,
    saveOrUpdate: saveOrUpdateUser,
    changePassword,
    recoverPassword,
    setPassword,
    checkEmailIsFree,
    changePhoto,
};
