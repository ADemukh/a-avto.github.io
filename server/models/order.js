var OrderSchema, mongoose;

mongoose = require('mongoose');
OrderSchema = require('./schemas/order');

module.exports = mongoose.model('Order', OrderSchema);