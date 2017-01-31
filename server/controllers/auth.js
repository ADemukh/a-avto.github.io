/*eslint strict:0  */
var auth, passport;

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
};
module.exports = auth;