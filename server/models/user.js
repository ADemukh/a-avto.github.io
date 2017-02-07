var User, config, mongoose;

mongoose = require('mongoose');
config = require('../config');

// Roles = ['client', 'shop', 'admin'];

// Client = {
// 	email: String,
// 	name: String,
// 	password: String,
// 	passwordHash: String,
// 	phone: String,
// 	photo: String,
// 	notifications: [],
// 	vk: {
// 		// vk profile
// 	},
// 	fb: {
// 		// fb profile
// 	},
// 	g: {
// 		// google profile
// 	},
// 	role: 'client'
// };

// Shop = mongoose.model('Shop', {
// 	email: String,
// 	name: String,
// 	password: String,
// 	passwordHash: String,
// 	phone: String,
// 	www: String,
// 	address: String,
// 	about: String,
// 	isDealer: Boolean,
// 	role: 'shop'
// });


User = mongoose.model('User', {
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
	role: {
		'type': String,
		'default': config.user.roles.CLIENT
	},
	phone: String,
	changesFrom: {
		'type': Date,
		// `Date.now()` returns the current unix timestamp as a number
		'default': Date.now
	}
});

module.exports = User;