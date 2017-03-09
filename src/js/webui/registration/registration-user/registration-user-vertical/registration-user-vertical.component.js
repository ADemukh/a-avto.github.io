(function RegistrationUserComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qRegistrationUserVertical', {
            controller: 'controllers.registrationuser',
            templateUrl: 'webui/registration/registration-user/registration-user-vertical/registration-user-vertical.tmpl.html'
        });
})();