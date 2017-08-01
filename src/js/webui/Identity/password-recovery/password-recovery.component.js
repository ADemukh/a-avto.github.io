(function PasswordRecoveryComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qPasswordRecoveryVertical', {
            controller: 'controllers.passwordrecovery',
            templateUrl: 'webui/identity/password-recovery/password-recovery.tmpl.html'
        })
        .controller('controllers.passwordrecovery', PasswordRecoveryController);

    PasswordRecoveryController.$inject = ['services.identity', 'services.webui.alerts'];

    function PasswordRecoveryController(identity, alerts) {
        var vm;

        vm = this;
        this.$onInit = function init() {
            vm.recover = function onRecover() {
                return identity.recoverPassword(vm.email)
                    .then(function response(resp) {
                        vm.alerts = resp.data && resp.data.success ? [alerts.success('Пароль оправлен на вашу почту')] : [alerts.danger('Пароль не был оправлен на вашу почту')];
                    });
            };
        };
    }
})();