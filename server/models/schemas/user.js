/*eslint strict:0  */
var UserSchema, bcrypt, config, mongoose;

mongoose = require('mongoose');
bcrypt = require('bcryptjs');
config = require('../../config');

UserSchema = new mongoose.Schema({
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
	notifications: [String],
	changesFrom: {
		'type': Date,
		'default': Date.now
	},
	photo: {
		fileName: String,
		url: String,
		thumbUrl: String
	}
}, {
	discriminatorKey: 'role'
});

UserSchema.methods.generateHash = function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(config.bcrypt.salt));
};

UserSchema.methods.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = UserSchema;