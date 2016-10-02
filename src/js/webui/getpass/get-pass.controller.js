(function GetPassControllerInit() {
    'use strict';

    angular.module('webui').
	controller('getPass', GetPassController);

function GetPassController () {
	var am;

	am = this;
	am.passwordReset = 'Восстановление пароля';
	am.restorePassword = 'Восстановить пароль';
}
})();