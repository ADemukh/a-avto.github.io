(function RegistrationUserComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qRegistrationUser', {
            controller: 'controllers.registrationuser',
            templateUrl: 'webui/registration/registration-user/registration-user.tmpl.html'
        });
})();