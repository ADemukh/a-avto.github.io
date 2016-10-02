(function UserLoginControllerInit() {
    'use strict';

    angular.module('webui').
	controller('userLogin', UserLoginController);

function UserLoginController () {
	var vm;

	vm = this;
	vm.enterSiteCaption = 'Вход на сайт';
	vm.enterCaption = 'Войти';
	vm.forgotPasswordCaption = 'Забыли пароль?';
	vm.cars = getCars();
	vm.click = function click (car) {
		// body...
	}

	function getCars () {
		// body...
		return ['Volvo','VW','Mazda'];
	}
}
})();