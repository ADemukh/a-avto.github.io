var GearboxSchema, mongoose;

mongoose = require('mongoose');
GearboxSchema = require('./schemas/gearbox');

module.exports = mongoose.model('Gearbox', GearboxSchema);