(function AuthSocialComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qAuthSocial', {
            controller: 'controllers.authsocial',
            bindings: {
                onSignedUp: '&'
            },
            templateUrl: 'webui/identity/common/auth-social/auth-social.tmpl.html'
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

            function successAuth(user) {
                this.onSignedUp({ user: user });
            }

            function failedAuth(resp) {
                this.alerts = [alerts.danger(resp.message)];
            }
        };
    }
})();