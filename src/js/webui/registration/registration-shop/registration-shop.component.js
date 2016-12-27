(function RegistrationShopComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qRegistrationShop', {
            controller: 'controllers.registrationshop',
            templateUrl: 'webui/registration/registration-shop/registration-shop.tmpl.html'
        });
})();