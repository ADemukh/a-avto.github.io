var Message, mongoose;

mongoose = require('mongoose');

Message = mongoose.model('Message', {
    author: {
		type: String,
		required: true
	},
    created: {
		type: String,
		required: true
	}
});

module.exports = Message;