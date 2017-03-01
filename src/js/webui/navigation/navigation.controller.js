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
		this.profileAlt = 'ПРОФИЛЬ';
		this.orderRegistrationAlt = 'ЗАЯВКИ';
		this.loggedIn = identity.loggedIn;
		this.logOut = identity.logOut;
	}
})();