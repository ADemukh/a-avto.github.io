let mongoose;

mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    question: String,
    answer: String,
    public: String,
    email: String,
    userName: String,
});
