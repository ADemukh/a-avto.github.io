var MessageSchema, moment, mongoose;

mongoose = require('mongoose');
moment = require('../../moment');

MessageSchema = new mongoose.Schema({
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	content: {
		type: String,
		required: true
	},
	created: {
		type: String,
		default: moment().format(moment.DATE_TIME_FORMAT)
	},
	seen: {
		type: Boolean,
		default: false
	}
});

module.exports = MessageSchema;