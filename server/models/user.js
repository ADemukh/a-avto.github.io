var User, mongoose, options, userSchema;

mongoose = require('mongoose');

options = {
	discriminatorKey: 'role'
};

userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: String,
	passwordHash: String,
	phone: String,
	changesFrom: {
		'type': Date,
		// `Date.now()` returns the current unix timestamp as a number
		'default': Date.now
	}
}, options);

User = mongoose.model('User', userSchema);

module.exports = User;