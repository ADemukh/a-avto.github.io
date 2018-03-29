/* eslint strict:0  */
let express,
    questionAnswerController,
    router;

express = require('express');

router = express.Router();
questionAnswerController = require('../controllers/questionAnswer');
responseHelper = require('../helpers/response');

router.post('/sendNewQuestion', (req, res) => {
    questionAnswerController.addQuestionAnswer({
        question: req.body.question,
        answer: req.body.answer,
        public: req.body.public,
        email: req.body.email,
        userName: req.body.userName,
    }).then(responseHelper(res).success, responseHelper(res).error);
});

router.get('/allQuestionAnswer/add', (req, res) => {
    res.render('question-answer/addQuestionAnswer', {});
});
router.post('/allQuestionAnswer/add', (req, res) => {
    questionAnswerController.addQuestionAnswer({
        question: req.body.question,
        answer: req.body.answer,
        public: req.body.public,
        userName: req.body.userName,
        email: req.body.email,
    })
        .then(() => {
            res.redirect('/questionAnswer');
        });
});

router.get('/getQuestionsAnswersPublic', (req, res) => {
    questionAnswerController.getQuestionAnswerPublic({})
        .then((questions) => {
            console.log(questions)
            res.json(questions);
        });
});

router.get('/getQuestionsAnswers', (req, res) => {
    questionAnswerController.getQuestionAnswer({})
        .then((questions) => {
            res.json(questions);
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

router.get('/allQuestionAnswer/:_id', (req, res) => {
    questionAnswerController.getQuestion(req.params._id)
        .then((question) => {
            res.render('question-answer/editQuestionAnswer', {
                question,
            });
        });
});

router.post('/allQuestionAnswer/:_id/edit', (req, res) => {
    questionAnswerController.updateQuestionAnswer({
        id: req.body.id,
        question: req.body.question,
        answer: req.body.answer,
        public: req.body.public,
        userName: req.body.userName,
        email: req.body.email,
    })
        .then(() => {
            res.redirect('/questionAnswer');
        });
});

module.exports = router;
