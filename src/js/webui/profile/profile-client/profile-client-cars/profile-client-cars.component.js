(function ProfileClientComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qProfileClientCars', {
            controller: 'controllers.profileclientcars',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/profile-client-cars.tmpl.html'
        });
})();