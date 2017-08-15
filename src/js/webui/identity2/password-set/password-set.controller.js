(function PasswordSetControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.passwordset', PasswordSetController);

	PasswordSetController.$inject = ['services.identity', '$state'];

	function PasswordSetController() {
	}
})();