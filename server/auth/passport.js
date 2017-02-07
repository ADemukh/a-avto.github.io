/*eslint strict:0  */
var AuthFacebookStrategy, AuthLocalStrategy, AuthVKStrategy, User, config, passport;

passport = require('passport');
config = require('../config');

AuthLocalStrategy = require('passport-local').Strategy;
AuthFacebookStrategy = require('passport-facebook').Strategy;
// AuthVKStrategy = require('passport-vkontakte').Strategy;
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

        User.findOne({
                email: email
            }).exec()
            .then(function userFound(user) {
                if (user) {
                    if (user.password === password) {
                        user.password = null;
                        done(null, user);
                    } else {
                        done(null, false, {
                            message: 'Неправильный пароль.'
                        });
                    }
                } else {
                    done(null, false, {
                        message: 'Пользователь не найден.'
                    });
                }
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
        User.findOne({
                email: email
            }).exec()
            .then(function userFound(user) {
                var newUser;

                if (user) {
                    return done(null, false, {
                        message: 'Пользователь с таким e-mail уже существует.'
                    });
                }

                newUser = new User({
                    email: email,
                    password: req.param('password'),
                    passwordHash: req.param('password'),
                    name: req.param('name'),
                    phone: req.param('phone'),
                    role: config.user.roles.CLIENT
                });

                // save new user to the database
                newUser.save(function complete(err) {
                    if (err) {
                        throw err;
                    }

                    // if successful, return the new user without password
                    newUser.password = null;
                    return done(null, newUser);
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
        User.findOne({
                email: email
            }).exec()
            .then(function userFound(user) {
                var newShopUser;

                if (user) {
                    return done(null, false, {
                        message: 'Пользователь с таким e-mail уже существует.'
                    });
                }

                newShopUser = new User({
                    email: email,
                    password: req.param('password'),
                    passwordHash: req.param('password'),
                    name: req.param('name'),
                    role: config.user.roles.CLIENT
                });

                // save our user to the database
                newShopUser.save(function complete(err) {
                    if (err) {
                        throw err;
                    }

                    // if successful, return the new shop user
                    newShopUser.password = null;
                    return done(null, newShopUser);
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

            User.findOne({
                    email: email
                }).exec()
                .then(function userFound(user) {
                    var newUser;

                    if (user) {
                        if (user.fb && user.fb.id === profile.id) {
                            user.password = null;
                            return done(null, user);
                        }

                        if (!user.fb) {
                            user.fb = {
                                id: profile.id,
                                profileUrl: profile.profileUrl
                            };

                            // save user with fb details to the database
                            user.save(function complete(err) {
                                if (err) {
                                    throw err;
                                }

                                // if successful, return the new user without password
                                user.password = null;
                                return done(null, user);
                            });
                        }

                        return done(null, false, {
                            message: 'Пользователь с таким e-mail уже существует.'
                        });
                    }

                    newUser = new User({
                        email: email,
                        name: profile.displayName,
                        role: config.user.roles.CLIENT,
                        fb: {
                            id: profile.id,
                            profileUrl: profile.profileUrl
                        }
                    });

                    // save new user to the database
                    newUser.save(function complete(err) {
                        if (err) {
                            throw err;
                        }

                        // if successful, return the new user without password
                        newUser.password = null;
                        return done(null, newUser);
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
    }
));

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