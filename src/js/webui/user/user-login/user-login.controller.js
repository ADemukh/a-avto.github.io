(function UserLoginControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.userlogin', UserLoginController);

	function UserLoginController() {
		this.enterSiteCaption = 'Вход на сайт';
		this.enterCaption = 'Войти';
		this.forgotPasswordCaption = 'Забыли пароль?';
	}
})();