(function PasswordRecoveryComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qPasswordRecoveryVertical', {
            controller: 'controllers.passwordrecovery',
            templateUrl: 'webui/password-recovery/password-recovery-vertical/password-recovery-vertical.tmpl.html'
        });
})();