/*eslint strict:0  */
var express, router, userController;

express = require('express');
router = express.Router();
userController = require('../controllers/user');

router.post('/registerUser', function registerUser(req, res) {
  userController.register(req.body)
    .then(function success(resp) {
      res.json(resp);
    });
});

module.exports = router;