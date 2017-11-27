var MessageSchema, mongoose;

mongoose = require('mongoose');
MessageSchema = require('./schemas/message');

module.exports = mongoose.model('Message', MessageSchema);