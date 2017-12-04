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

	NewOrderDetailsController.$inject = ['services.neworder', 'services.common', 'moment'];

	function NewOrderDetailsController(newOrderService, common, moment) {
		this.$onInit = function onInit() {
			this.orderDetails = newOrderService.newOrder().details;
			this.resolutionDateOptions = {
				minDate: moment.utc().format()
			};

			common.services.car.getSpareTypes().then(function onGetCategories(spareTypes) {
				this.spareTypes = spareTypes;
			}.bind(this));
		};
	}
})();