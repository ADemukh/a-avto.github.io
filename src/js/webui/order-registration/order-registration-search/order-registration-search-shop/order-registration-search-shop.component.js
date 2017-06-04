(function ShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchShop', {
            controller: 'controllers.orderregistrationsearchshop',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-shop/order-registration-search-shop.tmpl.html',
            bindings: {
                shop: '<'
            }
        });
})();