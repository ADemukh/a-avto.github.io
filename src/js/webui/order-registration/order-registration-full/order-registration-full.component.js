(function OrderRegistrationFullComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qOrderRegistrationFull', {
            controller: 'controllers.orderregistrationfull',
            templateUrl: 'webui/order-registration/order-registration-full/order-registration-full.tmpl.html'
        });
})();