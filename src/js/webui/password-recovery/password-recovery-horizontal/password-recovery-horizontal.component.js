(function PasswordRecoveryComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qPasswordRecoveryHorizontal', {
            controller: 'controllers.passwordrecovery',
            templateUrl: 'webui/password-recovery/password-recovery-horizontal/password-recovery-horizontal.tmpl.html'
        });
})();