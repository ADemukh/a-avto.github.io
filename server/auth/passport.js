const passport = require('passport');
const config = require('../config');
const userController = require('../controllers/user');

const AuthLocalStrategy = require('passport-local').Strategy;
const AuthFacebookStrategy = require('passport-facebook').Strategy;
const AuthVkStrategy = require('passport-vkontakte').Strategy;

const ClientUser = require('../models/userClient');
const ShopUser = require('../models/userShop');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if (user) {
            user.password = null;
        }
        done(err, user);
    });
});

const signinStrategyOption = {
    usernameField: 'email',
    passwordField: 'password',
};
passport.use('signin', new AuthLocalStrategy(
    signinStrategyOption,
    ((email, password, done) => {
        if (email === 'admin@aavto.com' && password === 'adminaavto') {
            return done(null, {
                name: 'admin',
                email: 'admin@aavto.com',
                role: 'admin',
            });
        }

        return userController.findByEmail(email)
            .then((user) => {
                if (!user) {
                    done(null, false, {
                        message: 'Не удалось ввойти. ',
                    });
                } else if (!!user.passwordHash && user.validPassword(password)) {
                    user.password = null;
                    done(null, user);
                } else {
                    done(null, false, {
                        message: 'Неправильный пароль.',
                    });
                }
            })
            .catch((err) => {
                done(err);
            });
    }),
));

const signupStrategyOption = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
};
passport.use('signupclient', new AuthLocalStrategy(
    signupStrategyOption,
    ((req, email, password, done) => {
        userController.findByEmail(email)
            .then((user) => {
                if (user) {
                    return done(null, false, {
                        message: 'Пользователь с таким e-mail уже существует.',
                    });
                }
                const clientUser = new ClientUser();
                clientUser.email = email;
                clientUser.password = req.param('password');
                clientUser.passwordHash = clientUser.generateHash(req.param('password'));
                clientUser.name = req.param('name');
                clientUser.phone = req.param('phone');

                return userController.saveOrUpdate(clientUser)
                    .then((savedUser) => {
                        savedUser.password = null;
                        return done(null, savedUser);
                    });
            })
            .catch((err) => {
                done(`Не удалось зарегистрироваться. ${err}`);
            });
    }),
));
passport.use('signupshop', new AuthLocalStrategy(
    signupStrategyOption,
    ((req, email, password, done) => {
        userController.findByEmail(email)
            .then((user) => {
                if (user) {
                    return done(null, false, {
                        message: 'Пользователь с таким e-mail уже существует.',
                    });
                }
                const shopUser = new ShopUser();
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
                    .then((savedUser) => {
                        savedUser.password = null;
                        return done(null, savedUser);
                    });
            })
            .catch((err) => {
                done(`Не удалось зарегистрироваться. ${err}`);
            });
    }),
));

const facebookStrategyOption = {
    clientID: config.auth.facebookAuth.clientID,
    clientSecret: config.auth.facebookAuth.clientSecret,
    callbackURL: config.auth.facebookAuth.callbackURL,
    profileFields: [
        'id',
        'displayName',
        'profileUrl',
        'email',
    ],
};
passport.use('facebook', new AuthFacebookStrategy(
    facebookStrategyOption,
    ((accessToken, refreshToken, profile, done) => {
        if (profile) {
            const email = profile.emails[0].value;

            return userController.findByEmail(email)
                .then((user) => {
                    if (user) {
                        if (user.fb && user.fb.id === profile.id) {
                            user.password = null;
                            return done(null, user);
                            // } else if (user.fb && user.fb.id && user.fb.id !== profile.id) {
                            //     done(null, false, {
                            //         message: 'Пользователь с таким e-mail уже существует.'
                            //     });
                        }

                        user.fb = {
                            id: profile.id,
                            profileUrl: profile.profileUrl,
                        };

                        return userController.saveOrUpdate(user)
                            .then((savedUser) => {
                                savedUser.password = null;
                                return done(null, savedUser);
                            });
                    }

                    const clientUser = new ClientUser({
                        email,
                        name: profile.displayName,
                        role: config.user.roles.CLIENT,
                        fb: {
                            id: profile.id,
                            profileUrl: profile.profileUrl,
                        },
                    });

                    return userController.saveOrUpdate(clientUser)
                        .then((savedUser) => {
                            savedUser.password = null;
                            return done(null, savedUser);
                        });
                })
                .catch((err) => {
                    done(`Не удалось авторизоваться через социальную сеть. ${err}`);
                });
        }
        return done(null, false, {
            message: 'Не удалось авторизоваться через социальную сеть.',
        });
    }),
));

const vkStrategyOption = {
    clientID: config.auth.vkAuth.clientID,
    clientSecret: config.auth.vkAuth.clientSecret,
    callbackURL: config.auth.vkAuth.callbackURL,
};
passport.use('vk', new AuthVkStrategy(
    vkStrategyOption,
    ((accessToken, refreshToken, params, profile, done) => {
        if (params && profile) {
            profile.id += '';

            const {
                email,
            } = {
                params,
            };

            return userController.findByEmail(params.email)
                .then((user) => {
                    if (user) {
                        if (user.vk && user.vk.id === profile.id) {
                            user.password = null;
                            return done(null, user);
                        }
                        if (user.vk && user.vk.id && user.vk.id !== profile.id) {
                            return done(null, false, {
                                message: 'Пользователь с таким e-mail уже существует.',
                            });
                        }
                        user.vk = {
                            id: profile.id,
                            profileUrl: profile.profileUrl,
                        };

                        return userController.saveOrUpdate(user)
                            .then((savedUser) => {
                                savedUser.password = null;
                                return done(null, savedUser);
                            });
                    }

                    const clientUser = new ClientUser({
                        email,
                        name: profile.displayName,
                        role: config.user.roles.CLIENT,
                        vk: {
                            id: profile.id,
                            profileUrl: profile.profileUrl,
                        },
                    });

                    return userController.saveOrUpdate(clientUser)
                        .then((savedUser) => {
                            savedUser.password = null;
                            return done(null, savedUser);
                        });
                })
                .catch((err) => {
                    done(`Не удалось авторизоваться через социальную сеть. ${err}`);
                });
        }
        return done(null, false, {
            message: 'Не удалось авторизоваться через социальную сеть.',
        });
    }),
));

module.exports = passport;
