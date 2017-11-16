var Answer, Attachment, Order, mongoose;

mongoose = require('mongoose');
Answer = require('./orderAnswer');
Attachment = require('./file');

Order = mongoose.model('Order', {
	title: {
		type: String,
		required: true
	},
	description: String,
	spareType: String,
	resolutionDate: Date,
	attachments: [Attachment],
	car: {
		mark: String,
		model: String,
		year: Number,
		VIN: String,
		engineType: String,
		engineCapacity: String,
		gearbox: String
	},
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
	answers: [Answer],
	mostWanted: Boolean,
	createdDate: {
		type: String,
		required: true
	}
});

module.exports = Order;