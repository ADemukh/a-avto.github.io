var Message, OrderAnswer, mongoose;

mongoose = require('mongoose');

Message = require('./message');

OrderAnswer = mongoose.model('OrderAnswer', {
    shop: {
		type: String,
		required: true
	},
    messages: [Message],
    created: Date
});

module.exports = OrderAnswer;