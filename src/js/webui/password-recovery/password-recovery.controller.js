(function PasswordRecoveryControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.passwordrecovery', PasswordRecoveryController);

    PasswordRecoveryController.$inject = ['services.identity', '$state'];

	function PasswordRecoveryController(identity) {
		this.title = 'Восстановление пароля';
		this.emailOrPhoneAlt = 'E-mail или телефон';
		this.recoverActionText = 'Восстановить пароль';
		this.recover = function onRecover() {
			return identity.recoverPassword(this.email)
				.then(function response(resp) {
					if (resp.data && resp.data.success) {
						this.successMessage = 'Пароль оправлен на вашу почту';
					}
					this.errorMessage - 'Пароль не был оправлен на вашу почту';
				});
		};
	}
})();