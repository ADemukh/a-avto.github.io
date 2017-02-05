/*eslint strict:0  */
var auth;

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
    }
};
module.exports = auth;