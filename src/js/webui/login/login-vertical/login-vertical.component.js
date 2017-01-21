(function LoginDirectiveInit() {
    'use strict';

    angular.module('webui')
        .component('qLoginVertical', {
            controller: 'controllers.login',
            templateUrl: 'webui/login/login-vertical/login-vertical.tmpl.html'
        });
})();