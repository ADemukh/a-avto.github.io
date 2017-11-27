var MessageSchema, OrderAnswerSchema, mongoose;

mongoose = require('mongoose');
MessageSchema = require('./message');

OrderAnswerSchema = new mongoose.Schema({
    shop: {
		type: String,
		required: true
	},
    messages: [MessageSchema],
    created: Date
});

module.exports = OrderAnswerSchema;