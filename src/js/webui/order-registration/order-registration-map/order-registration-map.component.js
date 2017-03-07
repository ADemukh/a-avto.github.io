(function MapsDirectiveInit() {
    'use strict';

    angular.module('webui')
        .component('qOrderRegistrationMap', {
            controller: 'controllers.orderregistrationmap',
            templateUrl: 'webui/order-registration/order-registration-map/order-registration-map.tmpl.html'
        });
})();