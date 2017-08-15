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

	NewOrderCarController.$inject = ['services.neworder'];

	function NewOrderCarController(newOrderService) {
		this.$onInit = function onInit() {
		};
		this.$onChanges = function onChanges(changes) {
		};
	};
})();