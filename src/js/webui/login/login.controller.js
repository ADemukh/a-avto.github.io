(function LoginControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).
	controller('controllers.login', LoginController);

    LoginController.$inject = ['services.identity', '$state'];

	function LoginController(identity, $state) {
		var vm;

		vm = this;
		vm.login = function login(isValid) {
			if (isValid) {
				identity.logIn(vm.user.email, vm.user.password)
				.then(function complete(result) {
					if (identity.loggedIn()) {
						$state.go('main');
					} else if (result.alert) {
						vm.errorMessage = result.alert.message;
						alert(result.alert.message);
					}
				});
			}
		};
	}
})();