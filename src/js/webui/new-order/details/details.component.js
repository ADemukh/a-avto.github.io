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

	NewOrderDetailsController.$inject = ['services.neworder', 'services.common'];

	function NewOrderDetailsController(newOrderService, common) {
		this.$onInit = function onInit() {
			this.orderDetails = newOrderService.newOrder.details;

			common.services.car.getSpareTypes().then(function onGetCategories(spareTypes) {
				this.spareTypes = spareTypes;
			}.bind(this));
		};
	}
})();