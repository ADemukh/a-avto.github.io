var OrderAnswerSchema, mongoose;

mongoose = require('mongoose');
OrderAnswerSchema = require('./schemas/orderAnswer');

module.exports = mongoose.model('OrderAnswer', OrderAnswerSchema);