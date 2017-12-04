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
                    .then(function success(response) {
                        this.alerts = [alerts.success(response.data.item.message)];
                    }.bind(this), function failure(response) {
                        this.alerts = [alerts.danger(response.data.error.message)];
                    }.bind(this));
            };
        };
    }
})();