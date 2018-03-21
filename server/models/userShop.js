let User,
    UserShopSchema,
    config;

config = require('../config');
User = require('./user');
UserShopSchema = require('./schemas/userShop');

module.exports = User.discriminator(config.user.roles.SHOP, UserShopSchema);
