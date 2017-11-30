(function LoginDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qLogin', {
            controller: 'controllers.login',
            templateUrl: 'webui/identity/login/login.tmpl.html'
        })
        .controller('controllers.login', LoginController);

    LoginController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

    function LoginController(identity, $state, alerts) {
        this.$onInit = function init() {
            this.login = function login() {
                identity.logIn(this.user.email, this.user.password)
                    .then(successSignIn.bind(this))
                    .catch(failureSignIn.bind(this));
            };
            this.onSocialSignedIn = successSignIn;

            function successSignIn(user) {
                if (user.role !== 'anon') {
                    identity.redirectToAttemptedUrl();
                }
            }
            function failureSignIn(resp) {
                this.alerts = [alerts.danger(resp.alert.message)];
            }
        };
    }
})();