(function ProfileClientCarsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientCars', {
            controller: 'controllers.profileclientcars',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/profile-client-cars.tmpl.html'
        });
})();