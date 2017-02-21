(function PasswordRecoveryControllerInit() {
	'use strict';

	angular.module('webui').
	controller('controllers.passwordrecovery', PasswordRecoveryController);

	PasswordRecoveryController.$inject = ['services.identity', '$state'];

	function PasswordRecoveryController(identity) {
		var vm;
		
		vm = this;
		vm.title = 'Восстановление пароля';
		vm.emailOrPhoneAlt = 'E-mail или телефон';
		vm.recoverActionText = 'Восстановить пароль';
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

		vm.alertEmailIsRequired = 'Введите E-mail';
		vm.alertEmailIsNotCorrect = 'Неправильный E-mail';
	}
})();