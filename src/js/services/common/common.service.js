(function CommonServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.common', CommonService);

    CommonService.$inject = ['services.adress', 'services.car', 'services.category', 'services.shop'];

    function CommonService(adress, car, category, shop) {
        return {
            services: {
                adress: adress,
                category: category,
                car: car,
                shop: shop
            }
        };
    }
})();