var ShopUser, User, config, mongoose, options, shopUserSchema;

config = require('../config');
mongoose = require('mongoose');
User = require('./user');

options = {
	discriminatorKey: 'role'
};

// shop fields
// 	email: String, required
// 	name: String, required
// 	password: String
// 	passwordHash: String
// 	phone: String
// 	changesFrom: Date
// 	www: String
// 	address: String
// 	about: String
// 	isDealer: Boolean

shopUserSchema = new mongoose.Schema({
	www: String,
	address: String,
	about: String,
	longitude: String,
	latitude: String,
	cities: [String],
	spareTypes: [String],
	carMarks: [String],
	spare: {
		isNew: Boolean,
		isOld: Boolean
	},
	schedule: {
		sunday: {
			active: Boolean,
			from: String,
			to: String
		},
		saturday: {
			active: Boolean,
			from: String,
			to: String
		},
		friday: {
			active: Boolean,
			from: String,
			to: String
		},
		thursday: {
			active: Boolean,
			from: String,
			to: String
		},
		wednesday: {
			active: Boolean,
			from: String,
			to: String
		},
		tuesday: {
			active: Boolean,
			from: String,
			to: String
		},
		monday: {
			active: Boolean,
			from: String,
			to: String
		}
	}
}, options);

ShopUser = User.discriminator(config.user.roles.SHOP, shopUserSchema);

module.exports = ShopUser;