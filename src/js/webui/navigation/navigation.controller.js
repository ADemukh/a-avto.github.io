(function NavigationControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).
	controller('controllers.navigation', NavigationController);

    NavigationController.$inject = ['services.identity'];

	function NavigationController(identity) {
		this.accessLevels = identity.accessLevels;
		this.loggedIn = identity.loggedIn;
		this.logOut = identity.logOut;
	}
})();