/*eslint strict:0  */
var authController, express, router;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');

//==================================================================
router.post('/loggedin', function loggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : null);
});

router.post('/login', authController.signIn);
router.post('/logout', authController.signOut);
router.post('/signupuser', authController.signUpClient);
router.post('/signupshop', authController.signUpShop);
router.get('/popup/:strategy', function authPopup(req, res) {
  res.render('auth', {
    title: req.params.strategy,
    authUrl: '/auth/' + req.params.strategy
  });
});
router.get('/facebook', authController.authFacebook);
router.get('/facebook/callback', authController.authFacebookCallback);
router.get('/vk', authController.authVk);
router.get('/vk/callback', authController.authVkCallback);

router.post('/recoverpassword', function recoverPassword(req, res) {
  authController.recoverPassword(req.body.email)
    .then(function complete(success) {
      res.json({
        success: success
      });
    });
});
//==================================================================

module.exports = router;