/*eslint strict:0  */
var AuthFacebookStrategy, AuthLocalStrategy, AuthVKStrategy, config, passport;

// config = require('nconf');
passport = require('passport');
AuthLocalStrategy = require('passport-local').Strategy;
// AuthFacebookStrategy = require('passport-facebook').Strategy;
// AuthVKStrategy = require('passport-vkontakte').Strategy;

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
        if (email === 'admin' && password === 'admin@gmail.com') {
            return done(null, {
                email: 'admin@gmail.com',
                password: 'admin'
            });
        }

        return done(null, false, {
            message: 'Неверный логин или пароль'
        });
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