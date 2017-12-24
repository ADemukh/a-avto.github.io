/*eslint strict:0  */
var express, questionAnswerController, router;

express = require('express');
router = express.Router();
questionAnswerController = require('../controllers/questionAnswer');

router.post('/sendnewquestion', function addNotificationPost(req, res) {
    questionAnswerController.addQuestionAnswer({
    question: req.body.question,
    answer: req.body.answer,
    status: req.body.status,
    email: req.body.email,
    userName: req.body.userName
  });
});

module.exports = router;