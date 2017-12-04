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

	NewOrderCarController.$inject = ['services.identity', 'services.neworder'];

	function NewOrderCarController(identity, newOrderService) {
		this.$onInit = function onInit() {
			this.myCars = identity.user.cars;
			this.orderCar = newOrderService.newOrder().car;
			this.selectCar = function selectCar(car) {
				this.selectedCarId = car._id;
				this.orderCar.selected = car;
			};
			this.selectedCarIsValid = function selectedCarIsValid() {
				if (this.orderCar.selected._id === this.orderCar.newCar._id) {
					return !!this.orderCar.newCar.mark;
				}
				return !!this.orderCar.selected._id;
			};

			// if ()
			this.selectCar(this.orderCar.selected._id ?
				this.orderCar.selected :
				this.myCars && this.myCars.length ?
					this.myCars[0] :
					this.orderCar.newCar);
		};
	}
})();