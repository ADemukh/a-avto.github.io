(function LoginDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qLoginVertical', {
            controller: 'controllers.login',
            templateUrl: 'webui/login/login-vertical/login-vertical.tmpl.html'
        });
})();