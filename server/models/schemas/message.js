var MessageSchema, mongoose;

mongoose = require('mongoose');
MessageSchema = new mongoose.Schema({
	author: {
		type: String,
		required: true
	},
	created: {
		type: String,
		required: true
	}
});

module.exports = MessageSchema;