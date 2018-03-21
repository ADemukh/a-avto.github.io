/* eslint strict:0  */
let express,
    questionAnswerController,
    router;

express = require('express');

router = express.Router();
questionAnswerController = require('../controllers/questionAnswer');

router.post('/sendNewQuestion', (req, res) => {
    questionAnswerController.addQuestionAnswer({
        question: req.body.question,
        answer: req.body.answer,
        status: req.body.status,
        email: req.body.email,
        userName: req.body.userName,
    });
});

router.get('/allQuestionAnswer/add', (req, res) => {
    res.render('question-answer/addQuestionAnswer', {});
});
router.post('/allQuestionAnswer/add', (req, res) => {
    questionAnswerController.addQuestionAnswer({
        question: req.body.question,
        answer: req.body.answer,
        status: req.body.status,
        userName: req.body.userName,
        email: req.body.email,
    })
        .then(() => {
            res.redirect('/questionAnswer');
        });
});

router.get('/getQuestionsAnswers', (req, res) => {
    questionAnswerController.getQuestionAnswer({})
        .then((cities) => {
            res.json(cities);
        });
});

router.get('/', (req, res) => {
    questionAnswerController.getQuestionAnswer({})
        .then((questions) => {
            res.render('question-answer/allQuestionAnswer', {
                questions,
            });
        });
});

router.post('/allQuestionAnswer/delete', (req, res) => {
    questionAnswerController.deleteQuestionAnswer(req.body.id)
        .then(() => {
            res.redirect('/questionAnswer');
        });
});

router.get('/allQuestionAnswer/:question', (req, res) => {
    questionAnswerController.getQuestion(req.params.question)
        .then((question) => {
            res.render('question-answer/editQuestionAnswer', {
                question,
            });
        });
});

router.post('/allQuestionAnswer/:question/edit', (req, res) => {
    questionAnswerController.updateQuestionAnswer({
        id: req.body.id,
        question: req.body.question,
        answer: req.body.answer,
        status: req.body.status,
        userName: req.body.userName,
        email: req.body.email,
    })
        .then(() => {
            res.redirect('/questionAnswer');
        });
});

module.exports = router;
