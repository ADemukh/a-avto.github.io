var config, moment;

moment = require('moment-timezone');
config = require('../config');

moment.tz.setDefault(config.timezone);

module.exports = moment;