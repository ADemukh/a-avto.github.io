(function RegistrationControllerInit() {
    'use strict';

    angular.module('webui').
	controller('registration', RegistrationController);

function RegistrationController () {
	var vm;

	vm = this;
	vm.clientRegistration ='Регистрация клиента';
	vm.registerClient ='Зарегистрироваться';
	vm.q ='Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
	vm.w ='Пользовательским соглашением';
	vm.e=' и даёте ';
	vm.r='Согласие на обработку перносальных данных';
	vm.carRegistration='Регистрация автосервиса';
	vm.authorizedDealer='Официальный дилер';
	vm.registerCar='Зарегистрироваться';
	
}
})();