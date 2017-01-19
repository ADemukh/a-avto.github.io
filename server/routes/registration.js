/*eslint strict:0  */
var express, router, userController;

express = require('express');
router = express.Router();
userController = require('../controllers/user');

router.post('/registerUser', function registerUser(req, res, next) {
  userController.register(req.body)
    .then(function success(userId) {
      res.json(userId);
    });
});

module.exports = router;