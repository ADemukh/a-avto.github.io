(function LoginDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qLoginVertical', {
            controller: 'controllers.login',
            templateUrl: 'webui/identity/login/login.tmpl.html'
        })
        .controller('controllers.login', LoginController);

    LoginController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

    function LoginController(identity, $state, alerts) {
        this.$onInit = function init() {
            this.login = function login(isValid) {
                if (isValid) {
                    identity.logIn(this.user.email, this.user.password)
                        .then(function complete(result) {
                            if (identity.loggedIn()) {
                                $state.go('public.main');
                            } else if (result.alert) {
                                this.alerts = [alerts.danger(result.alert.message)];
                            }
                        }.bind(this));
                }
            };
        };
    }
})();