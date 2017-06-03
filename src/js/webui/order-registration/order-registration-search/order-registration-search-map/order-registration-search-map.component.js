(function MapsDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchMap', {
            controller: 'controllers.orderregistrationsearchmap',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-map/order-registration-search-map.tmpl.html',
            bindings: {
                filters: '<',
                shops: '<'
            }
        });
})();