(function OrderRegistrationFullComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationFull', {
            controller: 'controllers.orderregistrationfull',
            templateUrl: 'webui/order-registration/order-registration-full/order-registration-full.tmpl.html'
        });
})();