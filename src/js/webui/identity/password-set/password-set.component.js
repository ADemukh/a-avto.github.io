(function PasswordSetComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qPasswordSet', {
            controller: 'controllers.passwordset',
            templateUrl: 'webui/identity/password-set/password-set.tmpl.html'
        })
        .controller('controllers.passwordset', PasswordSetController);

    PasswordSetController.$inject = ['$stateParams', 'services.identity', 'services.webui.alerts'];

    function PasswordSetController($stateParams, identity, alerts) {
        this.$onInit = function onInit() {
            this.setPassword = function setPassword() {
                return identity.setPassword($stateParams.token, this.password)
                    .then(function success() {
                        if (identity.loggedIn()) {
                            identity.redirectToAttemptedUrl();
                        }
                    }.bind(this), function failure(response) {
                        this.alerts = [alerts.danger(response.data.error.message)];
                    }.bind(this));
            };
        };
    }
})();