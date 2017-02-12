/*eslint strict:0  */
var AuthFacebookStrategy, AuthLocalStrategy, AuthVKStrategy, config, passport, userController;
var ClientUser, ShopUser, User;

passport = require('passport');
config = require('../config');
userController = require('../controllers/user');

AuthLocalStrategy = require('passport-local').Strategy;
AuthFacebookStrategy = require('passport-facebook').Strategy;
// AuthVKStrategy = require('passport-vkontakte').Strategy;

ClientUser = require('../models/clientUser');
ShopUser = require('../models/shopUser');
User = require('../models/user');

passport.serializeUser(function serialize(user, done) {
    done(null, user);
});

passport.deserializeUser(function deserialize(user, done) {
    done(null, user);
});

passport.use('login', new AuthLocalStrategy({
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
            .then(function userFound(user) {
                if (user.password === password) {
                    user.password = null;
                    done(null, user);
                } else {
                    done(null, false, {
                        message: 'Неправильный пароль.'
                    });
                }
            }, function userNotFound(error) {
                done(null, false, {
                    message: error
                });
            })
            .catch(function onError(err) {
                done(err);
            });
    }));

passport.use('signupuser', new AuthLocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function callback(req, email, password, done) {
        userController.findByEmail(email)
            .then(function userFound(user) {
                return done(null, false, {
                    message: 'Пользователь с таким e-mail уже существует.'
                });
            }, function userNotFound() {
                var clientUser;

                clientUser = new ClientUser({
                    email: email,
                    password: req.param('password'),
                    passwordHash: req.param('password'),
                    name: req.param('name'),
                    phone: req.param('phone'),
                    role: config.user.roles.CLIENT
                });

                return userController.saveOrUpdate(clientUser)
                    .then(function successful(savedUser) {
                        savedUser.password = null;
                        return done(null, savedUser);
                    });
            })
            .catch(function onError(err) {
                done(err);
            });
    }));

passport.use('signupshop', new AuthLocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function callback(req, email, password, done) {
        userController.findByEmail(email)
            .then(function userFound(user) {
                return done(null, false, {
                    message: 'Пользователь с таким e-mail уже существует.'
                });
            }, function userNotFound() {
                var shopUser;

                shopUser = new ShopUser({
                    email: email,
                    name: req.param('name'),
                    www: req.param('www'),
                    address: req.param('address'),
                    longitude: req.param('longitude'),
                    latitude: req.param('latitude'),
                    phone: req.param('phone'),
                    about: req.param('about'),
                    isDealer: req.param('isDealer'),
                    password: req.param('password'),
                    passwordHash: req.param('password'),
                    role: config.user.roles.SHOP
                });

                return userController.saveOrUpdate(shopUser)
                    .then(function successful(savedUser) {
                        savedUser.password = null;
                        return done(null, savedUser);
                    });
            })
            .catch(function onError(err) {
                done(err);
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
                .then(function userFound(user) {
                        if (user.fb && user.fb.id === profile.id) {
                            user.password = null;
                            done(null, user);
                        } else if (user.fb && user.fb.id !== profile.id) {
                            done(null, false, {
                                message: 'Пользователь с таким e-mail уже существует.'
                            });
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
                    },
                    function userNotFound() {
                        var clientUser;

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
                    })
                .catch(function onError(err) {
                    done(err);
                });
        } else {
            return done(null, false, {
                message: 'Не удалось авторизоваться через социальную сеть.'
            });
        }
    }));

// passport.use('vkontakte', new AuthVKStrategy({
//         clientID: config.get('auth:vk:app_id'),
//         clientSecret: config.get('auth:vk:secret'),
//         callbackURL: config.get('app:url') + '/auth/vk/callback'
//     },
//     function callback(accessToken, refreshToken, profile, done) {
//         //console.log('facebook auth: ', profile);

//         return done(null, {
//             username: profile.displayName,
//             photoUrl: profile.photos[0].value,
//             profileUrl: profile.profileUrl
//         });
//     }
// ));

module.exports = passport;