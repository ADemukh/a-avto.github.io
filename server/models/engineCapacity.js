let EngineCapacitySchema,
    mongoose;

mongoose = require('mongoose');
EngineCapacitySchema = require('./schemas/engineCapacity');

module.exports = mongoose.model('EngineCapacity', EngineCapacitySchema);
