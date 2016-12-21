var Article = require('../models/article');

module.exports = {
    addArticle: function(article) {
        var newArticle = new Article({
            title: article.title,
            text: article.text,
            picture: article.image.destination + '/' + article.image.fileName + article.image.extension
        });

        newArticle.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('loaded: ');
            }
        })
    },
    getArticles: function() {
        Article.find({}, function (err, data) {
            if (err) {
                console.log(err);
                return [];
            } else {
                console.log(data);

                return data;
            }
        });
    }
};
