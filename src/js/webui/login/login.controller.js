(function LoginControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).
	controller('controllers.login', LoginController);

    LoginController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

	function LoginController(identity, $state, alerts) {
		var vm;

		vm = this;
		vm.login = function login(isValid) {
			if (isValid) {
				identity.logIn(vm.user.email, vm.user.password)
				.then(function complete(result) {
					if (identity.loggedIn()) {
						$state.go('main');
					} else if (result.alert) {
						vm.alerts = [alerts.danger(result.alert.message)];
					}
				});
			}
		};
	}
})();