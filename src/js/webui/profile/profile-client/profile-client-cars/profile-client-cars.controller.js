(function ProfileClientCarsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientcars', ProfileClientCarsController);

	ProfileClientCarsController.$inject = ['services.car', 'services.identity'];

	function ProfileClientCarsController(carService, identity) {
		this.$onInit = function onInit() {
			this.cars = identity.user.cars;
			this.addMode = false;

			this.delete = function deleteCar(event) {
				var index;

				if (event.car) {
					index = this.cars.indexOf(event.car);
					this.cars.splice(index, 1);

					//todo: identity.user.cars = this.cars;
					//todo: identity.updateUser();
				}
			};
			this.update = function updateCar(event) {
				var index;

				if (event.newCar && event.oldCar) {
					index = this.cars.indexOf(event.oldCar);
					this.cars.splice(index, 1, event.newCar);

					//todo: identity.user.cars = this.cars;
					//todo: identity.updateUser();
				}
			};
			this.add = function addCar(event) {
				if (event.car) {
					this.cars.push(event.car);
					this.addMode = false;

					//todo: identity.user.cars = this.cars;
					//todo: identity.updateUser();
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