var EngineType, mongoose;

mongoose = require('mongoose');

EngineType = mongoose.model('EngineType', {
		name: String
});

module.exports = EngineType;