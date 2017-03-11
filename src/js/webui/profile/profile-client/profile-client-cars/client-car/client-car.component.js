(function ClientCarComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qClientCar', {
            controller: 'controllers.clientcar',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/client-car/client-car.tmpl.html',
            bindings: {
                car: '<'
            }
        });
})();