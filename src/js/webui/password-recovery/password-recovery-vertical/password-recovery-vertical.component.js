(function PasswordRecoveryComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qPasswordRecoveryVertical', {
            controller: 'controllers.passwordrecovery',
            templateUrl: 'webui/password-recovery/password-recovery-vertical/password-recovery-vertical.tmpl.html'
        });
})();