var Shop, mongoose;

mongoose = require('mongoose');
Shop = mongoose.model('Shop', {
	name: String,
	email: String,
	password: String,
	www: String,
	address: String,
	phone: String,
	about: String,
	isDealer: Boolean
});

module.exports = Shop;