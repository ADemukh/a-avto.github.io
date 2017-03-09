(function OrderRegistrationSearchComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearch', {
            controller: 'controllers.orderregistrationsearch',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search.tmpl.html'
        });
})();