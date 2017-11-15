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

	NewOrderDetailsController.$inject = ['services.neworder', 'services.common', 'services.identity', 'services.webui.alerts'];

	function NewOrderDetailsController(newOrderService, common, identityService, alerts) {
		var vm;

		vm = this;
		this.$onInit = function onInit() {
			common.services.adress.getCities().then(function onGetCities(cities) {
				vm.allCities = cities;
			});
			common.services.category.getCategories().then(function onGetCategories(categories) {
				vm.allCategories = categories;
			});
		};
		this.$onChanges = function onChanges(changes) {
		};
	};
})();