(function LoginControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.login', LoginController);

    LoginController.$inject = ['services.identity', '$state'];

	function LoginController(identity, $state) {
		var vm;

		vm = this;
		vm.title = 'Вход на сайт';
		vm.emailAlt = 'E-mail';
		vm.passwordAlt = 'Пароль';
		vm.loginActinonText = 'Войти';
		vm.forgotPasswordLinkText = 'Забыли пароль?';
		vm.login = function login(isValid) {
			if (isValid) {
				identity.logIn(vm.user.email, vm.user.password)
				.then(function complete(result) {
					if (identity.loggedIn()) {
						$state.go('main');
					} else if (result.alert) {
						vm.errorMessage = result.alert.message;
						alert(result.alert.message);
					}
				});
			}
		};
		vm.alertPasswordIsRequired = 'Введите пароль';
		vm.alertEmailIsRequired = 'Введите E-mail';
		vm.alertEmailIsNotCorrect = 'Неправильный e-mail';
	}
})();