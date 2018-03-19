var config, moment;

moment = require('moment-timezone');
config = require('../config');

moment.tz.setDefault(config.timezone);

moment.DATE_TIME_FORMAT = 'YYY-MM-DD HH:mm';

module.exports = moment;