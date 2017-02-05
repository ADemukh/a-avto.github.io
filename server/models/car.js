var Car, mongoose;

mongoose = require('mongoose');

Car = mongoose.model('Car', {
    mark: {
		type: String,
		required: true
	},
    model: {
		type: String,
		required: true
	},
    from: {
		type: Number,
		required: true
	},
    end: Number
});

module.exports = Car;