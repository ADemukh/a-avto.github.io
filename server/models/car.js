var Car, mongoose;

mongoose = require('mongoose');

Car = mongoose.model('Car', {
    mark: String,
    model: String,
    from: Number,
    end: Number
});

module.exports = Car;