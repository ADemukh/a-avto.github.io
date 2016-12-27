(function LoginControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.login', LoginController);

	function LoginController() {
		this.title = 'Вход на сайт';
		this.emailAlt = 'E-mail';
		this.passwordAlt = 'Пароль';
		this.loginActinonText = 'Войти';
		this.forgotPasswordLinkText = 'Забыли пароль?';
		this.login = function onLogin() {
			alert('on login!');
		};
	}
})();