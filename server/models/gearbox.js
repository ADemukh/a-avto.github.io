var Gearbox, mongoose;

mongoose = require('mongoose');

Gearbox = mongoose.model('Gearbox', {
		name: String
});

module.exports = Gearbox;