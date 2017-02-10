/*eslint strict:0  */
var authController, express, passport, router;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');
passport = require('passport');

function authenticate(passportStrategy) {
  return function passportWrapper(req, res, next) {
    passport.authenticate(passportStrategy, authController.onAuthenticated(req, res, next))(req, res, next);
  };
}

function onAuthenticatedSocial(req, res, next) {
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

function authenticateSocial(passportStrategy) {
  return function passportWrapper(req, res, next) {
    passport.authenticate(passportStrategy, onAuthenticatedSocial(req, res, next))(req, res, next);
  };
}

//==================================================================
router.post('/loggedin', function loggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : null);
});

router.post('/login', authenticate('login'));

router.post('/signupuser', authenticate('signupuser'));

router.get('/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));

// send 401 if failed
// send with redirection url if succeded
router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/#!/',
  failureRedirect: '/#!/login'
}));

router.post('/logout', function logout(req, res) {
  req.logOut();
  res.send(200);
});

router.post('/recoverpassword', function loggedIn(req, res) {
  authController.recoverPassword(req.body.email)
    .then(function complete(success) {
      res.json({
        success: success
      });
    });
});
//==================================================================

module.exports = router;