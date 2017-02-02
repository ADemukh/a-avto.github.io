/*eslint strict:0  */
var authController, express, router;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');

//==================================================================
router.post('/loggedin', function loggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : null);
});

router.post('/recoverpassword', function loggedIn(req, res) {
  authController.recoverPassword(req.body.email)
  .then(function complete(success) {
    res.json({ success: success });
  });
});


router.post('/login', authController.authenticate('login'));

router.post('/signupuser', authController.authenticate('signupuser'));

router.post('/logout', function logout(req, res) {
  req.logOut();
  res.send(200);
});
//==================================================================


module.exports = router;