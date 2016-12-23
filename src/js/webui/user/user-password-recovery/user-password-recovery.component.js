(function UserPasswordRecoveryComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qUserPasswordRecovery', {
            controller: 'controllers.userpasswordrecovery',
            templateUrl: 'webui/user/user-password-recovery/user-password-recovery.tmpl.html'
        });
})();