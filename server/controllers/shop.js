/*eslint strict:0  */
var Shop;

Shop = require('../models/shopUser');

module.exports = {
	getShops: function getShops(filter) {
		var currentDay, currentTime, data, shopFilter;

		shopFilter = {};
		if (filter.shopCity) {
			shopFilter.cities = filter.shopCity;
		}
		if (filter.carMark) {
			shopFilter.carMarks = filter.carMark;
		}
		if (filter.category) {
			shopFilter.spareCategories = filter.category;
		}
		if (filter.newDetail) {
			// shopFilter.spare = {
			// 	'isNew': true,
			// 	'isOld': false
			// };
		}
		if (filter.worksNow) {
			data = new Date();
			switch (data.getDay()) {
				case 0:
					currentDay = 'sunday';
					break;
				case 1:
					currentDay = 'monday';
					break;
				case 2:
					currentDay = 'tuesday';
					break;
				case 3:
					currentDay = 'wednesday';
					break;
				case 4:
					currentDay = 'thursday';
					break;
				case 5:
					currentDay = 'friday';
					break;
				case 6:
					currentDay = 'saturday';
					break;
			}

			currentTime = data.getHours() + ':00';
			shopFilter.schedule = {};
			shopFilter.schedule[currentDay] = {
				'active': true
				// to: {
				// 	$gte: currentTime
				// },
				// from:{
				// 	$gte: currentTime
				// }
			};
		}
		return Shop.find(shopFilter).exec();
	}
};