var mongoose = require('mongoose');

var Car = mongoose.model('Car', {
    mark: String,
    model: String,
    from: Number,
    end: Number
});

module.exports = Car;