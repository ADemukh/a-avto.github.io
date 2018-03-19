var FileSchema, OrderAnswerSchema, OrderSchema, UserClientCarSchema, config, moment, mongoose;

config = require('../../config');
mongoose = require('mongoose');
FileSchema = require('./file');
UserClientCarSchema = require('./userClientCar');
moment = require('../../moment');

OrderSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
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
	client: {
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		car: UserClientCarSchema,
		contacts: {
			email: {
				type: String,
				required: true
			},
			name: String,
			phoneNumbers: [String],
			address: String,
			city: String
		}
	},
	status: {
		type: String,
		default: config.order.statuses.new
	},
	dialogs: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OrderShopDialog'
	}],
	wantedList: {
		type: Boolean,
		default: false
	},
	created: {
		type: String,
		default: moment().format(moment.DATE_TIME_FORMAT)
	}
});

module.exports = OrderSchema;