var UserBaseSchema, mongoose;

mongoose = require('mongoose');
UserBaseSchema = require('./schemas/user');

module.exports = mongoose.model('User', UserBaseSchema);