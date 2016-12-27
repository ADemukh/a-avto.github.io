(function PasswordRecoveryControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.passwordrecovery', PasswordRecoveryController);

	function PasswordRecoveryController() {
		this.title = 'Восстановление пароля';
		this.emailOrPhoneAlt = 'E-mail или телефон';
		this.recoverActionText = 'Восстановить пароль';
		this.recover = function onRecover() {
			alert('on recover!');
		};
	}
})();