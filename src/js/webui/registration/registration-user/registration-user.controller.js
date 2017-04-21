(function RegistrationUserControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).
	controller('controllers.registrationuser', RegistrationUserController);

	RegistrationUserController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

	function RegistrationUserController(identity, $state, alerts) {
		var vm;

		vm = this;
		vm.resetServerError = function onChange() {
			// vm.alerts = null;
		};
		vm.register = function onRegister(isValid) {
			if (isValid) {
				identity.signUpUser(vm.user)
					.then(function complete(result) {
						if (identity.loggedIn()) {
							$state.go('client.profile.settings');
						} else if (result.alert) {
							vm.alerts = [alerts.danger(result.alert.message)];
						}
					});
			}
		};
	}
})();