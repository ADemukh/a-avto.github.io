/*eslint strict:0  */
var QuestionAnswer;

QuestionAnswer = require('../models/questionAnswer');

function saveQuestionAnswer(questionAnswer) {
    var questionAnswerModel;

    questionAnswerModel = new QuestionAnswer(questionAnswer);

    return questionAnswerModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(questionAnswer.question + ' is loaded.');
        }
    });
}

module.exports = {
    addQuestionAnswer: function addQuestionAnswer(questionAnswer) {
        return saveQuestionAnswer(questionAnswer);
    }
};