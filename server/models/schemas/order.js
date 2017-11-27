var FileSchema, OrderAnswerSchema, OrderSchema, UserClientCarSchema, mongoose;

mongoose = require('mongoose');
FileSchema = require('./file');
OrderAnswerSchema = require('./orderAnswer');
UserClientCarSchema = require('./userClientCar');

OrderSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: String,
	spareType: String,
	spare: {
		isNew: Boolean,
		isOld: Boolean
	},
	resolutionDate: String,
	attachments: [FileSchema],
	car: UserClientCarSchema,
	client: {
		email: {
			type: String,
			required: true
		},
		name: String,
		phoneNumbers: [String],
		address: String,
		city: String
	},
	status: String,
	shops: [String],
	answers: [OrderAnswerSchema],
	wantedList: {
		type: Boolean,
		default: false
	},
	createdDate: {
		type: String,
		// required: true
	}
});

module.exports = OrderSchema;