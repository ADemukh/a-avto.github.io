(function ClientCarControllerInit() {
	'use strict';

	angular.module('webui')
		.controller('controllers.clientcar', ClientCarController);

	ClientCarController.$inject = [];

	function ClientCarController() {
		var vm;

		this.checked = false;

		vm = this;

	}
})();