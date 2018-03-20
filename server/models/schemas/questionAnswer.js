var mongoose;

mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    question: String,
    answer: String,
    status: String,
    email: String,
    userName: String
});