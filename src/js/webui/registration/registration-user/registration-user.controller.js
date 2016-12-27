(function RegistrationUserControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationuser', RegistrationUserController);

	function RegistrationUserController() {
		this.title = 'Регистрация клиента';
		this.contactNameAlt = 'Контактное имя';
		this.emailAlt = 'E-mail';
		this.phoneAlt = '+375 xx xxx xx xx';
		this.phonePolicyText = 'Телефон необходим только для регистрации';
		this.registerActionText = 'Зарегистрироваться';
		this.register = function onRegister() {
			alert('on register!');
		};
		this.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		this.policyLinkTextPart2 = 'Пользовательским соглашением';
		this.policyTextPart3 = ' и даете ';
		this.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';
		this.policyTextPart5 = '.';
	}
})();