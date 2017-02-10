/*eslint strict:0  */
var User, auth, config, nodemailer;

User = require('../models/user');
config = require('../config');
nodemailer = require('nodemailer');

auth = {
    isAuthenticated: function isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.send(401);
        }
    },
    onAuthenticated: function onAuthenticated(req, res, next) {
        return function onAuthCompleted(err, user, alert) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({
                    alert: alert
                });
            }
            res.json({
                user: user
            });
        };
    },
    recoverPassword: function recoverPassword(email) {
        return User.findOne({
                email: email
            }).exec()
            .then(function userFound(user) {
                var mailOptions, transporter;

                if (user) {
                    transporter = nodemailer.createTransport(config.nodemailer.options);
                    mailOptions = {
                        from: config.nodemailer.maailFrom,
                        to: user.email,
                        subject: 'Aavto.by. Востоновление пороля',
                        html: 'Ваш потеряный пороль ' + user.password
                    };
                    return transporter.sendMail(mailOptions);
                }
            })
            .then(function emailSent(result) {
                if (result && result.accepted && result.accepted.length) {
                    console.log('Письмо успешно отправлено.');
                    return true;
                }
                console.log('письмо небыло оправлено');
                return false;
            })
            .catch(function failed(error) {
                if (error) {
                    console.log('Ошибка отправки: ' + error);
                    return false;
                }
            });
    }
};
module.exports = auth;