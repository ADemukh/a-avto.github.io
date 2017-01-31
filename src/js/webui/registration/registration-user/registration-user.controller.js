(function RegistrationUserControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationuser', RegistrationUserController);

	RegistrationUserController.$inject = ['services.identity', '$state'];

	function RegistrationUserController(identity, $state) {
		var vm;

		vm = this;
		vm.title = 'Регистрация клиента';
		vm.contactNameAlt = 'Контактное имя';
		vm.emailAlt = 'E-mail';
		vm.phoneAlt = '+375 xx xxx xx xx';
		vm.passwordAlt = 'Пароль';
		vm.password2Alt = 'Повторите пароль';
		vm.phonePolicyText = 'Телефон необходим только для регистрации';
		vm.registerActionText = 'Зарегистрироваться';
		vm.register = function onRegister() {
			var userInfo;

			userInfo = {
				contactName: vm.contactName,
				email: vm.email,
				phone: vm.phone,
				password: vm.password
			};
			identity.signUpUser(userInfo)
				.then(function complete(result) {
					if (identity.loggedIn()) {
						$state.go('main');
					} else if (result.alert) {
						vm.errorMessage = result.alert.message;
						alert(result.alert.message);
					}
				});
		};
		vm.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		vm.policyLinkTextPart2 = 'Пользовательским соглашением';
		vm.policyTextPart3 = ' и даете ';
		vm.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';
		vm.policyTextPart5 = '.';
	}
})();