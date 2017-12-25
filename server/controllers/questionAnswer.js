/*eslint strict:0  */
var QuestionAnswer;

QuestionAnswer = require('../models/questionAnswer');

function saveQuestionAnswer(question) {
    var questionAnswerModel;

    questionAnswerModel = new QuestionAnswer(question);
    return questionAnswerModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(questionAnswerModel.question + ' is loaded.');
        }
    });
}

module.exports = {
    getQuestionAnswer: function getQuestionAnswer(filter) {
        return QuestionAnswer.find(filter).exec();
    },
    deleteQuestionAnswer: function deleteQuestionAnswer(id) {
        return QuestionAnswer.findOne({
                _id: id
            }).exec()
            .then(function foundQuestionAnswer(question) {
                return question.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + question.id);
                    }
                });
            });
    },
    updateQuestionAnswer: function updateQuestionAnswer(question) {
		return QuestionAnswer.findById({
			_id: question.id
		}).exec()
			.then(function foundQuestionAnswer(gotQuestionAnswer) {
				gotQuestionAnswer.question = question.question;
                gotQuestionAnswer.answer = question.answer;
                gotQuestionAnswer.status = question.status;
                gotQuestionAnswer.userName = question.userName;
                gotQuestionAnswer.email = question.email;
				return gotQuestionAnswer.save()
					.then(function success(save) {
						console.log(save.type + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
    },
    getQuestion: function getQuestion(question) {
        return QuestionAnswer.findOne({
            question: question
        }).exec();
    },

    addQuestionAnswer: function addQuestionAnswer(questionAnswer) {
        return saveQuestionAnswer(questionAnswer);
    }
};