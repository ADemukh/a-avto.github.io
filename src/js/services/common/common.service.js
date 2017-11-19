(function CommonServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.common', CommonService);

    CommonService.$inject = ['services.adress', 'services.car', 'services.shop', 'services.order'];

    function CommonService(adress, car, shop, order) {
        return {
            services: {
                adress: adress,
                car: car,
                shop: shop,
                order: order
            }
        };
    }
})();