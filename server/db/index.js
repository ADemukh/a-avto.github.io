var config, mongoose;

mongoose = require('mongoose');
config = require('../config');

module.exports = mongoose.connect(config.db.connectionString, config.db.options);