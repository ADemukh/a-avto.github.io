var EngineTypeSchema, mongoose;

mongoose = require('mongoose');
EngineTypeSchema = require('./schemas/engineType');

module.exports = mongoose.model('EngineType', EngineTypeSchema);