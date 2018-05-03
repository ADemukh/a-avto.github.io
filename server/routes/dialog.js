const express = require('express');
const authController = require('../controllers/auth');
const responseHelper = require('../helpers/response');
const dialogController = require('../controllers/dialog');

const router = express.Router();


router.post('/addMessage', authController.isAuthenticated, (req, res) => {
    dialogController.addMessage(req.body.dialogId, req.body.author, req.body.content)
        .then(responseHelper(res).success, responseHelper(res).error);
});

module.exports = router;
