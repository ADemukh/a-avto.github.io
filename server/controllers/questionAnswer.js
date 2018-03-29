const QuestionAnswer = require('../models/questionAnswer');
const mailer = require('./mailer');
const sendAnswerTemplate = require('../templates/sendAnswer');
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
    getQuestionAnswerPublic: function getQuestionAnswerPublic() {
        return QuestionAnswer.find({ public: "on"}).exec();
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
                gotQuestionAnswer.public = question.public;
                gotQuestionAnswer.userName = question.userName;
                gotQuestionAnswer.email = question.email;

                const template = sendAnswerTemplate(gotQuestionAnswer);
                mailer.sendEmail(gotQuestionAnswer.email, 'Aavto.by. ' + gotQuestionAnswer.question, template);
                return gotQuestionAnswer.save()
                    .then((save) => {
                        console.log(`${save.question} is loaded.`);
                    }, (err) => {
                        console.log(err);
                    });
            });
    },
    getQuestion: function getQuestion(_id) {
        return QuestionAnswer.findById(_id).exec();
    },

    addQuestionAnswer: function addQuestionAnswer(questionAnswer) {
        questionAnswer.status = questionAnswer.public || false
        return saveQuestionAnswer(questionAnswer);
    },
};
