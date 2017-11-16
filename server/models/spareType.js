var SpareType, mongoose;

mongoose = require('mongoose');

SpareType = mongoose.model('SpareType', {
    name: {
		type: String,
		required: true
	}
});

module.exports = SpareType;