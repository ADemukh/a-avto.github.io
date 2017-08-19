var EngineCapacity, mongoose;

mongoose = require('mongoose');

EngineCapacity = mongoose.model('EngineCapacity', {
		name: String
});

module.exports = EngineCapacity;