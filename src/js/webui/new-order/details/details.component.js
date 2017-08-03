(function NewOrderDetailsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNewOrderDetails', {
            templateUrl: 'webui/new-order/details/details.tmpl.html',
            controller: 'controllers.neworderdetails',
			bindings: {
				back: '&',
				next: '&'
			}
        })
		.controller('controllers.neworderdetails', NewOrderDetailsController);

	NewOrderDetailsController.$inject = ['services.neworder'];

	function NewOrderDetailsController(newOrderService) {
		this.$onInit = function onInit() {
		};
		this.$onChanges = function onChanges(changes) {
		};
	};
})();