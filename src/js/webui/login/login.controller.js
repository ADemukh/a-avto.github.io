(function LoginControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.login', LoginController);

    LoginController.$inject = ['services.identity', '$state'];

	function LoginController(identity, $state) {
		this.title = 'Вход на сайт';
		this.emailAlt = 'E-mail';
		this.passwordAlt = 'Пароль';
		this.loginActinonText = 'Войти';
		this.forgotPasswordLinkText = 'Забыли пароль?';
		this.login = function login() {
			identity.logIn(this.email, this.password)
				.then(function success() {
					$state.go('main');
				});
		};
	}
})();