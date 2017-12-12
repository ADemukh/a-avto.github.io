var FileSchema, OrderAnswerSchema, OrderSchema, UserClientCarSchema, config, moment, mongoose;

config = require('../../config');
mongoose = require('mongoose');
FileSchema = require('./file');
UserClientCarSchema = require('./userClientCar');
moment = require('../../moment');

OrderSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: String,
	spareType: String,
	spare: {
		isNewDetail: Boolean,
		isUsedDetail: Boolean
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
	status: {
		type: String,
		default: config.order.statuses.new
	},
	shops: [String],
	wantedList: {
		type: Boolean,
		default: false
	},
	createdDate: {
		type: String,
		default: moment().format('YYY-MM-DD HH:mm')
	}
});

module.exports = OrderSchema;