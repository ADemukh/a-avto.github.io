(function PasswordRecoveryControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.passwordrecovery', PasswordRecoveryController);

	PasswordRecoveryController.$inject = ['services.identity', '$state'];

	function PasswordRecoveryController(identity) {
		var vm;

		vm = this;
		vm.recover = function onRecover() {
			return identity.recoverPassword(vm.email)
				.then(function response(resp) {
					if (resp.data && resp.data.success) {
						vm.successMessage = 'Пароль оправлен на вашу почту';
						alert(vm.successMessage);
					} else {
						vm.errorMessage = 'Пароль не был оправлен на вашу почту';
						alert(vm.errorMessage);
					}
				});
		};
	}
})();