(function CommonServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.common', CommonService);

    CommonService.$inject = ['services.adress', 'services.car', 'services.shop'];

    function CommonService(adress, car, shop) {
        return {
            services: {
                adress: adress,
                car: car,
                shop: shop
            }
        };
    }
})();