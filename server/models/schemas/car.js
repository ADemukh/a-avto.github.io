var mongoose;

mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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