var User, mongoose;

mongoose = require('mongoose');
User = mongoose.model('User', {
    userId: mongoose.Schema.Types.ObjectId,
	email: String,
    contactName: String,
	password: String,
	phone: String,
	photo: String,
    notifications: [String],
	im: {
		vk: {},
		fb: {},
		g: {}
	}
});

module.exports = User;