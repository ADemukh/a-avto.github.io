(function UserPasswordRecoveryControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.userpasswordrecovery', UserPasswordRecoveryController);

	function UserPasswordRecoveryController() {
		this.passwordReset = 'Восстановление пароля';
		this.restorePassword = 'Восстановить пароль';
	}
})();