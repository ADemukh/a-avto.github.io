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
		vm.register = function onRegister(isValid) {
			if (isValid) {
				identity.signUpUser(vm.user)
					.then(function complete(result) {
						if (identity.loggedIn()) {
							$state.go('main');
						} else if (result.alert) {
							vm.errorMessage = result.alert.message;
						}
					});
			}
		};
		vm.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		vm.policyLinkTextPart2 = 'Пользовательским соглашением';
		vm.policyTextPart3 = ' и даете ';
		vm.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';
		vm.policyTextPart5 = '.';
		vm.goToLoginAlt = 'Войти';

		vm.alertContactNameIsRequired = 'Введите контактное имя';
		vm.alertEmailIsRequired = 'Введите E-mail';
		vm.alertEmailIsNotCorrect = 'Неправильный пароль';
		vm.alertPhoneIsNotCorrect = 'Номер не соответветствует шаблону +375 xx xxx xx xx';
		vm.alertPasswordIsRequired = 'Введите пароль';
		vm.alertPasswordsAreDifferent = 'Пароли не совпадают';
	}
})();