var City, mongoose;

mongoose = require('mongoose');

City = mongoose.model('City', {
    name: {
		type: String,
		required: true
	}
});

module.exports = City;