/*eslint strict:0  */
var express, questionAnswerController, router;

express = require('express');
router = express.Router();
questionAnswerController = require('../controllers/questionAnswer');

router.post('/sendNewQuestion', function addNotificationPost(req, res) {
    questionAnswerController.addQuestionAnswer({
    question: req.body.question,
    answer: req.body.answer,
    status: req.body.status,
    email: req.body.email,
    userName: req.body.userName
  });
});

router.get('/allQuestionAnswer/add', function addQuestion(req, res) {
  res.render('question-answer/addQuestionAnswer', {});
});
router.post('/allQuestionAnswer/add', function addQuestionPost(req, res) {
  questionAnswerController.addQuestionAnswer({
    question: req.body.question,
    answer: req.body.answer,
    status: req.body.status,
    userName: req.body.userName,
    email: req.body.email
  })
    .then(function redirect() {
      res.redirect('/questionAnswer');
    });
});

router.get('/getQuestionsAnswers', function getQuestionsAnswers(req, res) {
  questionAnswerController.getQuestionAnswer({})
    .then(function gotQuestionAnswer(cities) {
      res.json(cities);
    });
});

router.get('/', function getQuestionAnswer(req, res) {
  questionAnswerController.getQuestionAnswer({})
    .then(function gotQuestionAnswer(questions) {
      res.render('question-answer/allQuestionAnswer', {
        questions: questions
      });
    });
});

router.post('/allQuestionAnswer/delete', function deleteQuestionAnswer(req, res) {
  questionAnswerController.deleteQuestionAnswer(req.body.id)
    .then(function redirect() {
      res.redirect('/questionAnswer');
    });
});

router.get('/allQuestionAnswer/:question', function getQuestion(req, res) {
  questionAnswerController.getQuestion(req.params.question)
    .then(function gotQuestion(question) {
      res.render('question-answer/editQuestionAnswer', {
        question: question
      });
    });
});

router.post('/allQuestionAnswer/:question/edit', function updateQuestionAnswer(req, res) {
  questionAnswerController.updateQuestionAnswer({
      id: req.body.id,
      question: req.body.question,
      answer: req.body.answer,
      status: req.body.status,
      userName: req.body.userName,
      email: req.body.email
    })
    .then(function redirect() {
      res.redirect('/questionAnswer');
    });
});

module.exports = router;