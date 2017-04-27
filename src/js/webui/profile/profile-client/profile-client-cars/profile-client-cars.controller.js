(function ProfileClientCarsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientcars', ProfileClientCarsController);

	ProfileClientCarsController.$inject = ['services.car', 'services.identity'];

	function ProfileClientCarsController(carService, identity) {

		this.$onInit = function onInit() {

			this.cars = identity.myAuto();
			this.addMode = false;

			this.delete = function deleteCar(event) {
				var index;
				if (event.car) {
					index = this.cars.indexOf(event.car);
					this.cars.splice(index, 1);
				}
			};
			this.update = function updateCar(event) {
				if (event.car) {}
			};

			this.add = function addCar(event) {
				if (event.car) {
					this.cars.push(event.car);
					this.addMode = false;
				}
			};
			this.toAddMode = function toAddMode() {
				// todo
				this.addMode = true;
			};
			this.cancelAddMode = function cancelAddMode() {
				// todo
				this.addMode = false;
			};
		};
	}
})();