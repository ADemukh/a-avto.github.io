(function RegistrationUserControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationuser', RegistrationUserController);

	RegistrationUserController.$inject = ['services.registration'];

	function RegistrationUserController(registrationService) {
		this.title = 'Регистрация клиента';
		this.contactNameAlt = 'Контактное имя';
		this.emailAlt = 'E-mail';
		this.phoneAlt = '+375 xx xxx xx xx';
		this.passwordAlt = 'Пароль';
		this.password2Alt = 'Повторите пароль';
		this.phonePolicyText = 'Телефон необходим только для регистрации';
		this.registerActionText = 'Зарегистрироваться';
		this.register = function onRegister() {
			var userInfo;

			userInfo = {
				contactName: this.contactName,
				email: this.email,
				phone: this.phone,
				password: this.password
			};
			registrationService.registerUser(userInfo)
				.then(function success(userId) {
					alert('user ' + userId + ' is registered!');
				});
		};
		this.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		this.policyLinkTextPart2 = 'Пользовательским соглашением';
		this.policyTextPart3 = ' и даете ';
		this.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';
		this.policyTextPart5 = '.';
	}
})();