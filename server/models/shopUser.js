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
	isDealer: Boolean
}, options);

ShopUser = User.discriminator(config.user.roles.SHOP, shopUserSchema);

module.exports = ShopUser;