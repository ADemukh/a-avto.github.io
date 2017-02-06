/*eslint strict:0  */
var auth, passport, User, Shop, nodemailer, transporter, mailOptions;

User = require('../models/user');
Shop = require('../models/shop');
passport = require('passport');
nodemailer = require('nodemailer');

auth = {
    isAuthenticated: function isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.send(401);
        }
    },
    authenticate: function authenticate(passportStrategy) {
        return function passportWrapper(req, res, next) {
            passport.authenticate(passportStrategy, function onAuthenticated(err, user, alert) {
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
            })(req, res, next);
        };
    },
    recoverPassword: function recoverPassword(email) {
        return User.findOne({
                email: email
            }).exec()
            .then(function userFound(user) {
                return user ? user : Shop.findOne({
                    email: email
                }).exec();
            })
            .then(function userFound(user) {
                if (user) {
                    transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'aleksey.demukh',
                            pass: 'aleksey10051990'
                        }
                    });
                    mailOptions = {
                        from: 'demuh.sergey10@gmail.com',
                        to: user.email,
                        subject: 'Востоновление пороля',
                        html: 'Ваш потеряный пороль' + user.password
                    };
                    return transporter.sendMail(mailOptions);
                }
            })
            .then(function sent(info) {
                if (info && info.accepted && info.accepted.length) {
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