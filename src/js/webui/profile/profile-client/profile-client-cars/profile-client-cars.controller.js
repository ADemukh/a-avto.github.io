(function ProfileClientCarsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientcars', ProfileClientCarsController);

	ProfileClientCarsController.$inject = ['services.car', 'services.client', 'services.webui.alerts', 'services.identity'];

	function ProfileClientCarsController(carService, clientService, alerts, identity) {
		this.$onInit = function onInit() {
			var vm;

			vm = this;
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
					clientService.changeCars(this.cars)
					.then(function complete(response) {
						vm.alerts = response.data.success ?
							[alerts.success(response.data.message ? response.data.message : 'Информация сохранена.')] :
							[alerts.danger(response.data.error ? response.data.error : 'При сохранении возникла ошибка.')];
						vm.user = {};
					});
					//todo: identity.user.cars = this.cars;
					//todo: identity.updateUser();
				}
			};
			this.add = function addCar(event) {
				if (event.car) {
					this.cars.push(event.car);
					this.addMode = false;
					clientService.changeCars(this.cars)
					.then(function complete(response) {
						vm.alerts = response.data.success ?
							[alerts.success(response.data.message ? response.data.message : 'Информация сохранена.')] :
							[alerts.danger(response.data.error ? response.data.error : 'При сохранении возникла ошибка.')];
						vm.user = {};
					});
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