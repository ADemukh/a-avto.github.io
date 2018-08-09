const Shop = require('../models/userShop');

function getAvailableShopsByOrder(orderInfo) {
    return Shop.find({})
        .select('_id')
        .exec();
}

module.exports = {
    getAvailableShopsByOrder,
};
