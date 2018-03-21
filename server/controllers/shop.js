const Shop = require('../models/userShop');
const moment = require('../moment');

module.exports = {
    getShops: function getShops(filter) {
        const shopFilter = {};
        if (filter.shopCity) {
            shopFilter.cities = { $in: [filter.shopCity] };
        }
        if (filter.carMark) {
            shopFilter.carMarks = { $in: [filter.carMark] };
        }
        if (filter.spareType) {
            shopFilter.spareCategories = { $in: [filter.spareType] };
        }
        if (filter.newDetail && !filter.usedDetail) {
            shopFilter['spare.isNew'] = true;
        }
        if (filter.usedDetail && !filter.newDetail) {
            shopFilter['spare.isOld'] = true;
        }
        if (filter.worksNow) {
            const currentDay = moment().format('dddd').toLowerCase();
            const currentTime = moment().format('HH:mm');
            shopFilter[`schedule.${currentDay}.active`] = true;
            shopFilter[`schedule.${currentDay}.from`] = { $lte: currentTime };
            shopFilter[`schedule.${currentDay}.to`] = { $gte: currentTime };
        }
        if (filter.worksOnWeekend) {
            shopFilter.$or = [
                { 'schedule.saturday.active': true },
                { 'schedule.sunday.active': true },
            ];
        }
        return Shop.find(shopFilter).exec();
    },
};
