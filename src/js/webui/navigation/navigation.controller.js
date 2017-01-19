(function NavigationControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.navigation', NavigationController);

    NavigationController.$inject = ['services.identity'];

	function NavigationController(identity) {
		this.mapsAlt = 'Поиск на карте';
		this.loginAlt = 'Войти';
		this.registrationAlt = 'Регистрация';
		this.profileAlt = 'Профиль';
		this.logOutAlt = 'Выйти';
		this.orderRegistrationAlt = 'Регистрация на ремонт';
		this.loginActinonText = 'Войти';
		this.forgotPasswordLinkText = 'Забыли пароль?';
		this.loggedIn = identity.loggedIn;
		this.logOut = identity.logOut;
	}
})();