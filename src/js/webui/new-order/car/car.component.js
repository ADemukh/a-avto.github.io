(function NewOrderCarComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qNewOrderCar', {
			templateUrl: 'webui/new-order/car/car.tmpl.html',
			controller: 'controllers.newordercar',
			bindings: {
				back: '&',
				next: '&'
			}
		})
		.controller('controllers.newordercar', NewOrderCarController);

	NewOrderCarController.$inject = ['services.identity', 'services.neworder', 'services.client', 'services.webui.alerts'];

	function NewOrderCarController(identity, newOrderService, clientService, alerts) {
		var vm;

		vm = this;
		this.$onInit = function onInit() {
			this.radioModel = 1;
			this.cars = identity.user.cars;

			this.add = function addCar(car) {
				if (car && vm.saveInGarage) {
					this.cars.push(car);
					this.addMode = false;
					changeCars(this.cars);
				}
			};
			function changeCars(cars) {
				clientService.changeCars(cars)
					.then(function complete(response) {
						vm.alerts = response.data.success ? [alerts.success(response.data.message || 'Информация сохранена.')] : [alerts.danger(response.data.error || 'При сохранении возникла ошибка.')];
						vm.user = {};
					});
			}
		};
		this.$onChanges = function onChanges(changes) {
		};
	};
})();