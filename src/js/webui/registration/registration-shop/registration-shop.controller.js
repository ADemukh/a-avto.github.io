(function RegistrationShopControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
		controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

	function RegistrationShopController(identity, $state, alerts) {
		var vm;

		vm = this;

		vm.resetServerError = function onChange() {
			// vm.alerts = null;
		};

		vm.register = function onRegister(isValid) {
			if (isValid) {
				identity.signUpShop(vm.shop)
					.then(function complete(result) {
						if (result.alert) {
							vm.alerts = [alerts.danger(result.alert.message)];
						} else {
							vm.alerts = [alerts.success('Ваш магазин успешно зарегистрирован!')];
							$state.go('shop.profile.settings');
						}
					});
			}
		};
	}
})();