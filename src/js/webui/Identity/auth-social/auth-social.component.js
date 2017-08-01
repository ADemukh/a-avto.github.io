(function AuthSocialComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qAuthSocial', {
            controller: 'controllers.authsocial',
            templateUrl: 'webui/identity/auth-social/auth-social.tmpl.html'
        })
        .controller('controllers.authsocial', AuthSocialController);

    AuthSocialController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

    function AuthSocialController(identity, $state, alerts) {
        this.$onInit = function init() {
            this.authFacebook = function authFacebook() {
                identity.authFacebook()
                    .then(successAuth.bind(this), failedAuth.bind(this));
            };
            this.authVk = function authVk() {
                identity.authVk()
                    .then(successAuth.bind(this), failedAuth.bind(this));
            };

            function successAuth() {
                $state.go('public.main');
            }

            function failedAuth(err) {
                this.alerts = [alerts.danger(err.message)];
            }
        };
    }
})();