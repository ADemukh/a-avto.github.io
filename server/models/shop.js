var Shop, mongoose;

mongoose = require('mongoose');
Shop = mongoose.model('Shop', {
    shopId: mongoose.Schema.Types.ObjectId,
	name: String,
	email: String,
	www: String,
	address: String,
	phone: String,
	about: String,
	isDealer: Boolean
});

module.exports = Shop;