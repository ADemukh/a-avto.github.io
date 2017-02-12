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

function authenticateSocial(passportStrategy) {
  return function passportWrapper(req, res, next) {
    passport.authenticate(passportStrategy, onAuthenticatedSocial(req, res, next))(req, res, next);
  };
}

function onAuthenticatedSocial(req, res, next) {
  return function onAuthCompleted(err, user, alert) {
    var response;

    if (err) {
      response = {
        alert: err
      };
    } else if (!user) {
      response = {
        alert: alert
      };
    } else {
      response = {
        user: user
      };
    }

    // return response.alert ? res.redirect('/#!/login') : res.redirect('/#!/');
    res.send(popupResponse(response));
  };
}

function popupResponse(data) {
  var jsonData;

  jsonData = JSON.stringify(data);

  return '<script>' +
    'window.opener.postMessage(' + jsonData + ', "*");' +
    'setTimeout(function() { window.close(); }, 50);' +
    '</script>';
}

//==================================================================
router.post('/loggedin', function loggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : null);
});

router.post('/login', authenticate('login'));

router.post('/signupuser', authenticate('signupuser'));

router.post('/signupshop', authenticate('signupshop'));

router.get('/popup/:strategy', function logout(req, res) {
  res.render('auth', {
    title: req.params.strategy,
    authUrl: '/auth/' + req.params.strategy
  });
});

router.get('/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));

router.get('/facebook/callback', authenticateSocial('facebook'));

router.get('/vk', passport.authenticate('vk', {
  scope: 'email'
}));

// send 401 if failed
// send with redirection url if succeded
router.get('/vk/callback', authenticateSocial('vk'));

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