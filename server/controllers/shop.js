/*eslint strict:0  */
var Shop;

Shop = require('../models/shopUser');

module.exports = {
    getShops: function getShops(filter) {
		return Shop.find(filter).exec();
	}
};
