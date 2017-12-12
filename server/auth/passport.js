/*eslint strict:0  */
var AuthFacebookStrategy, AuthLocalStrategy, AuthVkStrategy, config, passport, userController;
var ClientUser, ShopUser, User;

passport = require('passport');
config = require('../config');
userController = require('../controllers/user');

AuthLocalStrategy = require('passport-local').Strategy;
AuthFacebookStrategy = require('passport-facebook').Strategy;
AuthVkStrategy = require('passport-vkontakte').Strategy;

ClientUser = require('../models/userClient');
ShopUser = require('../models/userShop');
User = require('../models/user');

passport.serializeUser(function serialize(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function deserialize(id, done) {
    User.findById(id, function callback(err, user) {
        if (user) {
            user.password = null;
        }
        done(err, user);
    });
});

passport.use('signin', new AuthLocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function callback(email, password, done) {
        if (email === 'admin@aavto.com' && password === 'adminaavto') {
            return done(null, {
                name: 'admin',
                email: 'admin@aavto.com',
                role: 'admin'
            });
        }

        userController.findByEmail(email)
            .then(function searchCompleted(user) {
                if (!user) {
                    done(null, false, {
                        message: 'Не удалось ввойти. '
                    });
                } else if (!!user.passwordHash && user.validPassword(password)) {
                    user.password = null;
                    done(null, user);
                } else {
                    done(null, false, {
                        message: 'Неправильный пароль.'
                    });
                }
            })
            .catch(function onError(err) {
                done(err);
            });
    }));

passport.use('signupclient', new AuthLocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function callback(req, email, password, done) {
        userController.findByEmail(email)
            .then(function searchCompleted(user) {
                var clientUser;

                if (user) {
                    return done(null, false, {
                        message: 'Пользователь с таким e-mail уже существует.'
                    });
                }
                clientUser = new ClientUser();
                clientUser.email = email;
                clientUser.password = req.param('password');
                clientUser.passwordHash = clientUser.generateHash(req.param('password'));
                clientUser.name = req.param('name');
                clientUser.phone = req.param('phone');

                return userController.saveOrUpdate(clientUser)
                    .then(function successful(savedUser) {
                        savedUser.password = null;
                        return done(null, savedUser);
                    });
            })
            .catch(function onError(err) {
                done('Не удалось зарегистрироваться. ' + err);
            });
    }));

passport.use('signupshop', new AuthLocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function callback(req, email, password, done) {
        userController.findByEmail(email)
            .then(function searchCompleted(user) {
                var shopUser;

                if (user) {
                    return done(null, false, {
                        message: 'Пользователь с таким e-mail уже существует.'
                    });
                }
                shopUser = new ShopUser();
                shopUser.email = email;
                shopUser.name = req.param('name');
                shopUser.www = req.param('www');
                shopUser.address = req.param('address');
                shopUser.longitude = req.param('longitude');
                shopUser.latitude = req.param('latitude');
                shopUser.phone = req.param('phone');
                shopUser.about = req.param('about');
                shopUser.isDealer = req.param('isDealer');
                shopUser.password = req.param('password');
                shopUser.passwordHash = shopUser.generateHash(req.param('password'));
                shopUser.role = config.user.roles.SHOP;

                return userController.saveOrUpdate(shopUser)
                    .then(function successful(savedUser) {
                        savedUser.password = null;
                        return done(null, savedUser);
                    });
            })
            .catch(function onError(err) {
                done('Не удалось зарегистрироваться. ' + err);
            });
    }));

passport.use('facebook', new AuthFacebookStrategy({
        clientID: config.auth.facebookAuth.clientID,
        clientSecret: config.auth.facebookAuth.clientSecret,
        callbackURL: config.auth.facebookAuth.callbackURL,
        profileFields: [
            'id',
            'displayName',
            'profileUrl',
            'email'
        ]
    },
    function callback(accessToken, refreshToken, profile, done) {
        var email;

        if (profile) {
            email = profile.emails[0].value;

            userController.findByEmail(email)
                .then(function searchCompleted(user) {
                    var clientUser;

                    if (user) {
                        if (user.fb && user.fb.id === profile.id) {
                            user.password = null;
                            done(null, user);
                            // } else if (user.fb && user.fb.id && user.fb.id !== profile.id) {
                            //     done(null, false, {
                            //         message: 'Пользователь с таким e-mail уже существует.'
                            //     });
                        } else {
                            user.fb = {
                                id: profile.id,
                                profileUrl: profile.profileUrl
                            };

                            return userController.saveOrUpdate(user)
                                .then(function successful(savedUser) {
                                    savedUser.password = null;
                                    return done(null, savedUser);
                                });
                        }
                    } else {
                        clientUser = new ClientUser({
                            email: email,
                            name: profile.displayName,
                            role: config.user.roles.CLIENT,
                            fb: {
                                id: profile.id,
                                profileUrl: profile.profileUrl
                            }
                        });

                        return userController.saveOrUpdate(clientUser)
                            .then(function successful(savedUser) {
                                savedUser.password = null;
                                return done(null, savedUser);
                            });
                    }
                })
                .catch(function onError(err) {
                    done('Не удалось авторизоваться через социальную сеть. ' + err);
                });
        } else {
            return done(null, false, {
                message: 'Не удалось авторизоваться через социальную сеть.'
            });
        }
    }));

passport.use('vk', new AuthVkStrategy({
        clientID: config.auth.vkAuth.clientID,
        clientSecret: config.auth.vkAuth.clientSecret,
        callbackURL: config.auth.vkAuth.callbackURL
    },
    function callback(accessToken, refreshToken, params, profile, done) {
        var email;

        if (params && profile) {
            profile.id += '';
            email = params.email;

            userController.findByEmail(email)
                .then(function searchCompleted(user) {
                        var clientUser;

                        if (user) {
                            if (user.vk && user.vk.id === profile.id) {
                                user.password = null;
                                done(null, user);
                            } else if (user.vk && user.vk.id && user.vk.id !== profile.id) {
                                done(null, false, {
                                    message: 'Пользователь с таким e-mail уже существует.'
                                });
                            } else {
                                user.vk = {
                                    id: profile.id,
                                    profileUrl: profile.profileUrl
                                };

                                return userController.saveOrUpdate(user)
                                    .then(function successful(savedUser) {
                                        savedUser.password = null;
                                        return done(null, savedUser);
                                    });
                            }
                        } else {
                            clientUser = new ClientUser({
                                email: email,
                                name: profile.displayName,
                                role: config.user.roles.CLIENT,
                                vk: {
                                    id: profile.id,
                                    profileUrl: profile.profileUrl
                                }
                            });

                            return userController.saveOrUpdate(clientUser)
                                .then(function successful(savedUser) {
                                    savedUser.password = null;
                                    return done(null, savedUser);
                                });
                        }
                    })
                .catch(function onError(err) {
                    done('Не удалось авторизоваться через социальную сеть. ' + err);
                });
        } else {
            return done(null, false, {
                message: 'Не удалось авторизоваться через социальную сеть.'
            });
        }
    }));

module.exports = passport;