(function ProfileShopOrdersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileShopOrders', {
            controller: 'controllers.profileshoporders',
            templateUrl: 'webui/profile/profile-shop/profile-shop-orders/profile-shop-orders.tmpl.html'
        });
})();