(function LoginDirectiveInit() {
    'use strict';

    angular.module('webui')
        .component('qLoginHorizontal', {
            controller: 'controllers.login',
            templateUrl: 'webui/login/login-horizontal/login-horizontal.tmpl.html'
        });
})();