/*eslint strict:0  */
module.exports = function auth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.send(401);
    }
};