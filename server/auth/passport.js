/*eslint strict:0  */
var AuthFacebookStrategy, AuthLocalStrategy, AuthVKStrategy, config, passport;
var Shop, User;

// config = require('nconf');
passport = require('passport');
AuthLocalStrategy = require('passport-local').Strategy;
// AuthFacebookStrategy = require('passport-facebook').Strategy;
// AuthVKStrategy = require('passport-vkontakte').Strategy;
User = require('../models/user');
Shop = require('../models/shop');

passport.serializeUser(function serialize(user, done) {
    done(null, user);
});

passport.deserializeUser(function deserialize(user, done) {
    done(null, user);
});

passport.use('local', new AuthLocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function callback(email, password, done) {
        if (email === 'admin@aavto.com' && password === 'admin') {
            return done(null, {
                contactName: 'admin',
                email: 'admin@aavto.com',
                role: 'admin'
            });
        }

        User.findOne({ email: email }).exec()
            .then(function userFound(user) {
                return user ? user : Shop.findOne({ email: email }).exec();
            })
            .then(function userFound(user) {
                if (user) {
                    if (user.password === password) {
                         done(null, user);
                    } else {
                        done(null, false, { message: 'Incorrect password.' });
                    }
                } else {
                    done(null, false, { message: 'Incorrect username.' });
                }
            })
            .catch(function onError(err) {
                 done(err);
            });

        // User.findOne({ email: email }).exec()
        //     .then(function foundUser(err, user) {
        //         if (err) {
        //             done(err);
        //         } else if (user) {
        //             return user.password === password ?
        //                  done(null, user) :
        //                  done(null, false, { message: 'Incorrect password.' });
        //         } else {
        //             Shop.findOne({ email: email }).exec()
        //                 .then(function foundShop(err2, shop) {
        //                     if (err2) {
        //                         done(err2);
        //                     } else if (shop) {
        //                         return shop.password === password ?
        //                             done(null, shop) :
        //                             done(null, false, { message: 'Incorrect password.' });
        //                     } else {
        //                         done(null, false, { message: 'Incorrect username.' });
        //                     }
        //                 });
        //         }
        //     });
    }
));

// passport.use('facebook', new AuthFacebookStrategy({
//         clientID: config.get('auth:fb:app_id'),
//         clientSecret: config.get('auth:fb:secret'),
//         callbackURL: config.get('app:url') + '/auth/fb/callback',
//         profileFields: [
//             'id',
//             'displayName',
//             'profileUrl',
//             'username',
//             'link',
//             'gender',
//             'photos'
//         ]
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

// passport.use('vk', new AuthVKStrategy({
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