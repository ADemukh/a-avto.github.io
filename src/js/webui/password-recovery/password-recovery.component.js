(function PasswordRecoveryComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qPasswordRecovery', {
            controller: 'controllers.passwordrecovery',
            templateUrl: 'webui/password-recovery/password-recovery.tmpl.html'
        });
})();