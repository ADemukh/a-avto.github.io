let QuestionAnswerSchema,
    mongoose;

mongoose = require('mongoose');
QuestionAnswerSchema = require('./schemas/questionAnswer');

module.exports = mongoose.model('QuestionAnswer', QuestionAnswerSchema);
