var ClientUser, User, clientUserSchema, config, mongoose, options;

config = require('../config');
mongoose = require('mongoose');
User = require('./user');

options = {
	discriminatorKey: 'role'
};

// client fields
// 	email: String, required
// 	name: String, required
// 	password: String
// 	passwordHash: String
// 	phone: String
// 	changesFrom: Date
// 	photo: String
// 	notifications: []
// 	vk: { id, profileUrl }
// 	fb: { id, profileUrl }
// 	g: { gogle profile fields }

clientUserSchema = new mongoose.Schema({
	photo: String,
	cars: [{ mark: String, model: String, years: Number }],
	notifications: [String],
	vk: {
		id: String,
		profileUrl: String
	},
	fb: {
		id: String,
		profileUrl: String
	},
	g: {}
}, options);

ClientUser = User.discriminator(config.user.roles.CLIENT, clientUserSchema);

module.exports = ClientUser;