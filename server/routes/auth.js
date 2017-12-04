/*eslint strict:0  */
var authController, express, responseHelper, router, userController;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');
userController = require('../controllers/user');
responseHelper = require('../helpers/response');

router.post('/loggedin', function loggedIn(req, res) {
  return req.isAuthenticated() ?
    responseHelper(res).success(req.user) :
    responseHelper(res).error(null);
});

router.post('/login', authController.signIn);
router.post('/logout', authController.signOut);
router.post('/signupclient', authController.signUpClient);
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

router.post('/emailisfree', function checkEmailIsFree(req, res) {
  userController.checkEmailIsFree(req.body.email)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/recoverpassword', function recoverPassword(req, res) {
  userController.recoverPassword(req)
    .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/setpassword', function recoverPassword(req, res) {
  userController.setPassword(req.body.token, req.body.password)
    .then(function complete(user) {
      req.logIn(user, function onLoginnedIn(loginErr) {
        if (loginErr) {
          return responseHelper(res).error(loginErr);
        }
        return responseHelper(res).success(user);
      });
    })
    .catch(responseHelper(res).error);
});

module.exports = router;