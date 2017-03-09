(function OrderRegistrationSearchControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationsearch', OrderRegistrationSearchController);

	OrderRegistrationSearchController.$inject = ['services.neworder'];

	function OrderRegistrationSearchController(newOrderService) {
		this.$onInit = function init() {
			this.filters = {
				shopCity: newOrderService.newOrder.shopCity,
				carMark: newOrderService.newOrder.car.mark,
				category: newOrderService.newOrder.category,
				isNewDetail: newOrderService.newOrder.isNewDetail
			};
        };
		this.updateFilters = function onUpdateFilters(event) {
			if (event.filters) {
				this.filters = event.filters;
				newOrderService.newOrder.shopCity = event.filters.shopCity;
				newOrderService.newOrder.car.mark = event.filters.carMark;
				newOrderService.newOrder.category = event.filters.category;
				newOrderService.newOrder.isNewDetail = event.filters.isNewDetail;
			}
		};
	}
})();