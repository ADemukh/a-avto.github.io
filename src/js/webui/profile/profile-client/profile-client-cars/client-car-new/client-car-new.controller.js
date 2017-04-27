(function ClientCarNewControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.clientcarnew', ClientCarNewController);

	ClientCarNewController.$inject = [];

	function ClientCarNewController() {
		this.add = function addCar() {
			this.onAdd();
		};
	}
})();