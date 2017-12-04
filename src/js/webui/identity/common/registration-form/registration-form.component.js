(function RegistrationShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qRegistrationForm', {
            controller: 'controllers.registrationform',
            bindings: {
                role: '<',
                onSignedUp: '&'
            },
            templateUrl: 'webui/identity/common/registration-form/registration-form.tmpl.html'
        })
        .controller('controllers.registrationform', RegistrationFormController);

    RegistrationFormController.$inject = ['services.identity', 'services.webui.alerts'];

    function RegistrationFormController(identity, alerts) {
        this.$onInit = function onInit() {
            this.resetServerError = resetServerError.bind(this);
            this.signUp = function signUp() {
                identity.signUp(this.user, this.role)
                    .then(successSignUp.bind(this))
                    .catch(failureSignUp.bind(this));
            };
            this.onSocialSignedUp = function onSocialSignedUp(user) {
                this.onSignedUp({ user: user });
            };
        };
        this.$onChanges = function onChanges(changes) {
            if (changes.role) {
                resetServerError.call(this);
            }
        };

        function resetServerError() {
            this.alerts = null;
        }

        function successSignUp(user) {
            this.onSignedUp({ user: user });
        }

        function failureSignUp(resp) {
            this.alerts = [alerts.danger(resp.data.error.message)];
        }
    }
})();