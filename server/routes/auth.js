/*eslint strict:0  */
var authController, express, router;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');

//==================================================================
router.post('/loggedin', function loggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : null);
});

router.post('/login', authController.authenticate('login'));

router.post('/signupuser', authController.authenticate('signupuser'));

router.post('/logout', function logout(req, res) {
  req.logOut();
  res.send(200);
});
//==================================================================

module.exports = router;