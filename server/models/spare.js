var Spare, mongoose;

mongoose = require('mongoose');

Spare = mongoose.model('Spare', {
    name: {
		type: String,
		required: true
	}
});

module.exports = Spare;