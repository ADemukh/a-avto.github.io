var CarSchema, mongoose;

mongoose = require('mongoose');
CarSchema = require('./schemas/car');

module.exports = mongoose.model('Car', CarSchema);