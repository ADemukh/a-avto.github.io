(function LoginDirectiveInit() {
    'use strict';

    angular.module('webui')
        .component('qLogin', {
            controller: 'controllers.login',
            templateUrl: 'webui/login/login.tmpl.html'
        });
})();