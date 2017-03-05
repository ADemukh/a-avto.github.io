(function NavigationControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.navigation', NavigationController);

    NavigationController.$inject = ['services.identity'];

	function NavigationController(identity) {
		this.mapsAlt = 'ПОИСК МАГАЗИНА';
		this.logInAlt = 'ВОЙТИ';
		this.logOutAlt = 'ВЫЙТИ';
		this.registrationAlt = 'РЕГИСТРАЦИЯ';
		this.ordersAlt = 'ЗАЯВКИ';
		this.userOrdersAlt = 'ЗАЯВКИ';
		this.userCarsAlt = 'ГАРАЖ';
		this.userSettingsAlt = 'НАСТРОЙКИ';
		this.loggedIn = identity.loggedIn;
		this.logOut = identity.logOut;
	}
})();