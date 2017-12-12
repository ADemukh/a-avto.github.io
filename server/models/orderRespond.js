var mongoose, orderRespond;

mongoose = require('mongoose');
orderRespond = require('./schemas/orderRespond');

module.exports = mongoose.model('Order', orderRespond);