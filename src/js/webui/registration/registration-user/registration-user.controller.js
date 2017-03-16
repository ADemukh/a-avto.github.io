(function RegistrationUserControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).
	controller('controllers.registrationuser', RegistrationUserController);

	RegistrationUserController.$inject = ['services.identity', '$state'];

	function RegistrationUserController(identity, $state) {
		var vm;

		vm = this;
		vm.resetServerError = function onChange() {
			vm.serverErrorMessage = null;
		};
		vm.register = function onRegister(isValid) {
			if (isValid) {
				identity.signUpUser(vm.user)
					.then(function complete(result) {
						if (identity.loggedIn()) {
							$state.go('profile');
						} else if (result.alert) {
							vm.serverErrorMessage = result.alert.message;
						}
					});
			}
		};
	}
})();