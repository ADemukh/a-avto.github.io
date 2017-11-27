var User, UserClientSchema, config;

config = require('../config');
User = require('./user');
UserClientSchema = require('./schemas/userClient');

module.exports = User.discriminator(config.user.roles.CLIENT, UserClientSchema);