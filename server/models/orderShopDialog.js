let OrderShopDialogSchema,
    mongoose;

mongoose = require('mongoose');
OrderShopDialogSchema = require('./schemas/orderShopDialog');

module.exports = mongoose.model('OrderShopDialog', OrderShopDialogSchema);
