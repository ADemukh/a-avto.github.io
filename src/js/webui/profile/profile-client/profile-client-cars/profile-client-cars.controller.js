(function ProfileClientCarsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientcars', ProfileClientCarsController);

	ProfileClientCarsController.$inject = ['services.cars'];

	function ProfileClientCarsController(cars) {
		this.$onInit = function onInit() {
			this.cars = cars.getClientCars();
			console.log('on init!');
		};
	}
})();