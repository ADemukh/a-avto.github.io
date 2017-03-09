(function PasswordSetComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qPasswordSetVertical', {
            controller: 'controllers.passwordset',
            templateUrl: 'webui/password-set/password-set-vertical/password-set-vertical.tmpl.html'
        });
})();