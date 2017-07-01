/*eslint strict:0  */
var bcrypt, config, mongoose, options, userSchema;

mongoose = require('mongoose');
bcrypt = require('bcryptjs');
config = require('../config');

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
		'default': Date.now
	},
	photo: {
		fileName: String,
		url: String,
		thumbUrl: String
	}
}, options);

userSchema.methods.generateHash = function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(config.bcrypt.salt));
};

userSchema.methods.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);