(function RegistrationComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qRegistration', {
            controller: 'controllers.registration',
            templateUrl: 'webui/identity/registration/registration.tmpl.html',
            bindings: {
                single: '<'
            }
        })
        .controller('controllers.registration', RegistrationUserController);

    RegistrationUserController.$inject = ['services.identity', 'services.webui.alerts', '$state'];

    function RegistrationUserController(identity, alerts, $state) {
        this.$onInit = function onInit() {
            this.canSingUpAsClient = !this.single || this.single === 'client';
            this.canSingUpAsShop = !this.single || this.single === 'shop';
            this.role = this.canSingUpAsClient ? 'client' : 'shop';
            this.onSignedUp = function onSignedUp(user) {
                if (user.role === 'client') {
                    $state.go('client.profile.settings');
                }
                if (user.role === 'shop') {
                    $state.go('shop.profile.settings');
                }
            };
        }
    }
})();