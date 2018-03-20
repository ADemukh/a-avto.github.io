(function SearchOrdersFiltersComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSearchOrdersFiltersContent', {
			controller: 'controllers.searchordersfilterscontent',
			templateUrl: 'webui/search/search-orders/filters/content/content.tmpl.html',
			bindings: {
				filters: '<',
				onApply: '&',
				onCancel: '&'
			}
		})
		.controller('controllers.searchordersfilterscontent', SearchOrdersFiltersContentController);

	SearchOrdersFiltersContentController.$inject = ['services.common'];

	function SearchOrdersFiltersContentController(common) {
		this.$onInit = function onInit() {
			common.services.adress.getCities().then(function onGetCities(cities) {
				this.cities = cities;
			}.bind(this));
			common.services.car.getCars().then(function onGetCars(carMarks) {
				this.carMarks = carMarks;
			}.bind(this));
			common.services.car.getSpareTypes().then(function onGetSpareTypes(spareTypes) {
				this.spareTypes = spareTypes;
			}.bind(this));

			this.apply = function applyFilters() {
				this.onApply({
					$event: {
						filters: this.filters
					}
				});
			};
			this.cancel = function cancelFilters() {
				this.onCancel();
			};
		};
		this.$onChanges = function onChanges(changes) {
			if (changes.filters) {
				this.filters = angular.copy(this.filters);
			}
		};
	}
})();