(function OrderRegistrationSearchControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationsearch', OrderRegistrationSearchController);

	OrderRegistrationSearchController.$inject = ['services.neworder'];

	function OrderRegistrationSearchController(newOrderService) {
		var FILTERS, MAP, MAP_FILTERS, MAP_RESULTS, RESULTS;

		FILTERS = 'filters';
		MAP = 'map';
		RESULTS = 'results';
		MAP_FILTERS = 'map,filters';
		MAP_RESULTS = 'map,results';

		this.$onInit = function init() {
			this.filters = {
				shopCity: newOrderService.newOrder.shopCity,
				carMark: newOrderService.newOrder.car.mark,
				category: newOrderService.newOrder.category,
				isNewDetail: newOrderService.newOrder.isNewDetail
			};

			this.filtersMapResults = [MAP, FILTERS, RESULTS];
			this.filtersResults = [MAP_FILTERS, MAP_RESULTS];
			this.option = MAP_FILTERS;
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
		this.switchTo = function onSwitchTo(event) {
			if (event.option) {
				this.option = event.option;
			}
		};
		this.showFilters = function showFilters() {
			return containOption(this.option, FILTERS);
		};
		this.showMap = function showMap() {
			return containOption(this.option, MAP);
		};
		this.showResults = function showResults() {
			return containOption(this.option, RESULTS);
		};

		function containOption(option, compareToOption) {
			return option.indexOf(compareToOption) >= 0;
		}
	}
})();