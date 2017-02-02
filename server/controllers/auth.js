/*eslint strict:0  */
var auth, passport, User, Shop;

User = require('../models/user');
Shop = require('../models/car');
passport = require('passport');

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
    }

    recoverPassword: function recoverPassword(email) {
        User.findOne({
            email:email
        }).exec()
        .then(function userFound(user){
            return user ? user : Shop.findOne({
                email: email
            }).exec();
        })
        .then(function userFound(user){
            if(user){
                //sens email
                return true;
            }
            return false
        });
    }
};
module.exports = auth;