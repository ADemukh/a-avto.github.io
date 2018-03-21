const QuestionAnswer = require('../models/questionAnswer');

function saveQuestionAnswer(question) {
    const questionAnswerModel = new QuestionAnswer(question);
    return questionAnswerModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${questionAnswerModel.question} is loaded.`);
        }
    });
}

module.exports = {
    getQuestionAnswer: function getQuestionAnswer(filter) {
        return QuestionAnswer.find(filter).exec();
    },
    deleteQuestionAnswer: function deleteQuestionAnswer(id) {
        return QuestionAnswer.findOne({
            _id: id,
        }).exec()
            .then(question => question.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${question.id}`);
                }
            }));
    },
    updateQuestionAnswer: function updateQuestionAnswer(question) {
        return QuestionAnswer.findById({
            _id: question.id,
        }).exec()
            .then((gotQuestionAnswer) => {
                gotQuestionAnswer.question = question.question;
                gotQuestionAnswer.answer = question.answer;
                gotQuestionAnswer.status = question.status;
                gotQuestionAnswer.userName = question.userName;
                gotQuestionAnswer.email = question.email;
                return gotQuestionAnswer.save()
                    .then((save) => {
                        console.log(`${save.type} is loaded.`);
                    }, (err) => {
                        console.log(err);
                    });
            });
    },
    getQuestion: function getQuestion(question) {
        return QuestionAnswer.findOne({
            question,
        }).exec();
    },

    addQuestionAnswer: function addQuestionAnswer(questionAnswer) {
        return saveQuestionAnswer(questionAnswer);
    },
};
