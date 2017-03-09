(function RegistrationShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qRegistrationShop', {
            controller: 'controllers.registrationshop',
            templateUrl: 'webui/registration/registration-shop/registration-shop.tmpl.html'
        });
})();