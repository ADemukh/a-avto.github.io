(function SearchShopsFiltersComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSearchShopsFiltersContent', {
			controller: 'controllers.searchshopsfilterscontent',
			templateUrl: 'webui/search-shops/filters/content/content.tmpl.html',
			bindings: {
				filters: '<',
				onApply: '&',
				onCancel: '&'
			}
		})
		.controller('controllers.searchshopsfilterscontent', SearchShopsFiltersContentController);

	SearchShopsFiltersContentController.$inject = ['services.common'];

	function SearchShopsFiltersContentController(common) {
		this.$onInit = function onInit() {
			common.services.adress.getCities().then(function onGetCities(cities) {
				this.cities = cities;
			}.bind(this));
			common.services.car.getCars().then(function onGetCars(carMarks) {
				this.carMarks = carMarks;
			}.bind(this));
			common.services.category.getCategories().then(function onGetCategories(categories) {
				this.categories = categories;
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