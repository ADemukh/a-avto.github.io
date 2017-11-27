var SpareTypeSchema, mongoose;

mongoose = require('mongoose');
SpareTypeSchema = require('./schemas/spareType');

module.exports = mongoose.model('SpareType', SpareTypeSchema);