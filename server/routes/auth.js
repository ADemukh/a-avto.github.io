/*eslint strict:0  */
var express, passport, router;

express = require('express');
router = express.Router();
passport = require('passport');

//==================================================================
// route to test if the user is logged in or not
router.post('/loggedin', function loggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : null);
});

// route to log in
router.post('/login', passport.authenticate('local'), function login(req, res) {
  res.send(req.user);
});

// route to log out
router.post('/logout', function logout(req, res) {
  req.logOut();
  res.send(200);
});
//==================================================================

module.exports = router;