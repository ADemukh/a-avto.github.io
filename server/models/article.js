var mongoose = require('mongoose');

var Article = mongoose.model('Article', {
    title: String,
    text: String,
    picture: String
});

module.exports = Article;