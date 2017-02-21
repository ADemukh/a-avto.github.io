(function PasswordSetComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qPasswordSetVertical', {
            controller: 'controllers.passwordset',
            templateUrl: 'webui/password-set/password-set-vertical/password-set-vertical.tmpl.html'
        });
})();