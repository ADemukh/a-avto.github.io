(function PasswordRecoveryComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qPasswordRecovery', {
            controller: 'controllers.passwordrecovery',
            templateUrl: 'webui/identity/password-recovery/password-recovery.tmpl.html'
        })
        .controller('controllers.passwordrecovery', PasswordRecoveryController);

    PasswordRecoveryController.$inject = ['services.identity', 'services.webui.alerts'];

    function PasswordRecoveryController(identity, alerts) {
        this.$onInit = function init() {
            this.recover = function onRecover() {
                return identity.recoverPassword(this.email)
                    .then(function success(user) {
                        if (user.role !== 'anon') {
                            identity.redirectToAttemptedUrl();
                        }
                    }.bind(this), function failure(resp) {
                        this.alerts = [alerts.danger(resp.alert.message)];
                    }.bind(this));
            };
        };
    }
})();